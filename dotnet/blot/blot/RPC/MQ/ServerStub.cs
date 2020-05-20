using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.DataStructures;

namespace Blot.RPC.MQ
{
    public class ServerStub
    {
        private static CacheByID stubs = new CacheByID();
        public readonly int StubID;

        public ServerStub() {
            lock (stubs) {
                StubID = stubs.Set(this);
            }
        }

        static public ServerStub GetStub(int stubID)
        {
            ServerStub ret = null;
            lock (stubs) {
                ret = (ServerStub)stubs.Get(stubID);
            }
            return ret;
        }

        static public bool RemoveStub(int stubID)
        {
            bool ret = false;
            lock (stubs) {
                if(stubs.Contains(stubID)) {
                    stubs.Remove(stubID);
                    ret = true;
                }
            }
            return ret;
        }

        virtual public Response Call(Request req) { return null; }
    }
}
