using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.DataStructures;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;

namespace Blot.RPC.MQ
{
    [Serializable]
    public class Response
    {
        public Request Request;
        public readonly CacheByKey Items = new CacheByKey();
        private string err;

        public Response() { }

        public Response(Request request)
        {
            Construct(request);
        }

        public Response(Request request, string error)
        {
            Construct(request);
            Error = error;
        }

        private void Construct(Request request)
        {
            if (request.Equals(null)) { throw new ArgumentNullException("Must specify a request."); }
            Request = request;
        }

        public bool DoesRequestMatch(Request req)
        {
            Request lhs = Request, rhs = req;
            return (lhs.ClientID  == rhs.ClientID &&
                    lhs.ServerID  == rhs.ServerID &&
                    lhs.Method    == rhs.Method &&
                    lhs.RequestID == rhs.RequestID);
        }

        public string Error
        {
            get => err;
            set { if ("" == err && "" != value) { err = value; } }
        }
    }
}
