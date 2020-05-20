using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.RPC.MQ;

namespace Blot_Server.DAO
{
    class Ensemble : ServerStub
    {
        public readonly int EnsembleID = -1;
        public Ensemble(int ensembleID)
        {
            EnsembleID = ensembleID;
            Console.Out.WriteLine("Ensemble has been created for ensembleID = " + EnsembleID.ToString());
        }

        public string GetEnsembleName()
        {
            if (1 == EnsembleID) { return "RUSH"; }
            else if (2 == EnsembleID) { return "DREAM THEATER"; }
            return "";
        }

        override public Response Call(Request req)
        {
            Response ret = null;
            if ("Ensemble.GetEnsembleName" == req.Method)
            {
                ret = new Response(req);
                ret.Items.Set("ensembleName", GetEnsembleName());
                Console.Out.WriteLine("Ensemble.GetEnsembleName() has returned " + ret.Items.Get("ensembleName"));
            }
            return ret;
        }
    }
}