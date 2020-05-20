using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Messaging;
using System.Threading;
using System.IO;

namespace Blot.RPC.MQ
{
    // A simple single-threaded server.
    public class Server
    {
        public readonly string ServerID;

        public Server(string serverID) {
            if ("" == serverID) { throw new ArgumentException("Must specify server."); }
            ServerID = serverID;
            Console.Out.WriteLine(ServerID + " is running...");
        }

        public void Run() { MessagePump(); }

        private void MessagePump()
        {
            MessageQueue q = Queues.Get(ServerID);
            q.Purge();
            while (true) {
                if( CanHandleEvent(q) ) {
                    Response res = HandleEvent((Request)q.Receive().Body);
                    if ( "Server.Kill" == res.Request.Method) { break; }
                }
            }
        }

        private bool CanHandleEvent(MessageQueue q) {
            Message m = q.Peek();
            m.Formatter = new BinaryMessageFormatter();
            Request req = (Request)m.Body;
            return (req.ServerID == ServerID);
        }

        private Response HandleEvent(Request req)
        {
            Response res = RequestToResponse(req);
            Message m = new Message(res, new BinaryMessageFormatter());
            Queues.Get(res.Request.ClientID).Send(m);
            return res;
        }

        private Response RequestToResponse(Request req)
        {
            ServerStub s = ServerStub.GetStub((int)req.Args.Get("stubID"));
            try { return (null == s) ? new Response(req, "Unhandled request") :
                ( s.Call(req) ?? new Response(req, "Handled but returned null")); }
            catch (Exception e) { return new Response(req, "Error: " + e.Message); }
        }
    }
}
