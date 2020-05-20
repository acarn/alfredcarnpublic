using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Messaging;
using System.Threading;
using System.Runtime.Serialization.Formatters.Binary;

namespace Blot.RPC.MQ
{
    public class Client
    {
        public readonly string ClientID = null;

        public Client(string clientID)
        {
            if ("" == clientID) { throw new ArgumentException("Must specify client."); }
            ClientID = clientID;
        }

        public Response Send(Request req)
        {
            if (req.ClientID != ClientID) { throw new ArgumentException("Unrecognized client."); }
            return RequestToResponse(req);
        }

        private Response RequestToResponse(Request req)
        {
            SendRequest(req);
            return ReceiveResponse(req);
        }

        private void SendRequest(Request req) {
            Message m = new Message(req, new BinaryMessageFormatter());
            Queues.Get(req.ServerID).Send(m);
        }

        private Response ReceiveResponse(Request req)
        {
            MessageQueue q = Queues.Get(req.ClientID);
            q.Purge();
            while (true) {
                if (CanReceive(q, req)) {
                    return (Response)q.Receive().Body;
                }
            }
        }

        private bool CanReceive(MessageQueue q, Request req)
        {
            Message m = q.Peek();
            m.Formatter = new BinaryMessageFormatter();
            Response res = (Response)q.Peek().Body;
            return res.DoesRequestMatch(req);
        }
    }
}
