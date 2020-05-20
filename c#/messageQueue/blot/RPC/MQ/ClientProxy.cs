using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blot.RPC.MQ
{
    public class ClientProxy
    {
        private Client client;
        protected readonly int StubID;

        public ClientProxy(Client c, int stubID){
            client = c;
            StubID = stubID;
        }
        
        virtual protected Response Call(Request req){ 
            req.Args.Set("stubID", StubID);
            return client.Send(req);
        }
        
        protected void ThrowOnError(Response res) {
            if(null!=res && "" != (res.Error ?? "")) { throw new Exception(res.Error); }
        }
    }
}
