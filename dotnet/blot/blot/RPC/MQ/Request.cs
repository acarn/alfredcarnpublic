using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.DataStructures;
using System.IO;
using System.Runtime.Serialization;
using System.Runtime.Serialization.Formatters.Binary;
using Blot.DataStructures;

namespace Blot.RPC.MQ
{
    [Serializable]
    public class Request
    {
        public readonly string ClientID;
        public readonly string ServerID;
        public readonly string Method;

        private static object lastLock = new object();
        private static int last = 0;
        public readonly int RequestID = 0;

        public readonly CacheByKey DataMembers = new CacheByKey();
        public readonly CacheByKey Args = new CacheByKey();

        public Request() { }

        public Request(string clientID, string serverID, string method)
        {
            if ("" == clientID      ) { throw new ArgumentException("Must specify the client."); }
            if ("" == serverID      ) { throw new ArgumentException("Must specify the server."); }
            if ("" == method        ) { throw new ArgumentException("Must specify the method."); }
            if (clientID == serverID) { throw new ArgumentException("Client must not be the same as server."); }
            ClientID = clientID;
            ServerID = serverID;
            Method = method;
            lock(lastLock) {
                if(Int32.MaxValue == last) { last = 0; }
                RequestID = ++last;
            }
    }
    }
}
