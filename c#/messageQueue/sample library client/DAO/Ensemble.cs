using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.RPC.MQ;

namespace Blot_Library.DAO
{
    public class Ensemble : ClientProxy 
    {
        public Ensemble(int stubID) : base(LibraryClient.Instance, stubID) { }

        public string GetEnsembleName()
        {
            Request req = LibraryClient.Instance.CreateRequest("Ensemble.GetEnsembleName");
            Response res = Call(req);
            ThrowOnError(res);
            if (null != res) {
                return (string)res.Items.Get("ensembleName");
            }
            return "";
        }
    }
}
