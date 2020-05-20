using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.RPC.MQ;
using Blot_Server.DAO;

namespace Blot_Server
{
    class Library : ServerStub
    {
        public Library() { Console.Out.WriteLine("Library has been created."); }

        public Ensemble GetEnsemble(int ensembleID)
        {
            if (1 == ensembleID) { return new Ensemble(1); }
            else if(2 == ensembleID) { return new Ensemble(2); }
            return null;
        }
        
        override public Response Call(Request req) {
            Response ret = null;
            if ("Library.GetEnsemble" == req.Method) {
                Ensemble e = GetEnsemble((int)req.Args.Get("ensembleID"));
                if (null!=e) {
                    ret = new Response(req);
                    ret.Items.Set("stubID", e.StubID);
                }
            }
            return ret;
        }
    }
}
