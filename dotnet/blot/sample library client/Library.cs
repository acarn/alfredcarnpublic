using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.RPC.MQ;
using Blot_Library.DAO;

namespace Blot_Library
{
    // The entry point for this library.
    public class Library : ClientProxy
    {
        private static Library instance = null;

        private Library() : base(LibraryClient.Instance, 1/*The root object*/) { }

        public static Library Instance {
            get {
                if (null == instance) { instance = new Library(); }
                return instance;
            }
        }
        
        public Ensemble GetEnsemble(int ensembleID)
        {
            Request req = LibraryClient.Instance.CreateRequest("Library.GetEnsemble");
            req.Args.Set("ensembleID", ensembleID);
            Response res = Call(req);
            ThrowOnError(res);
            if (null != res && res.Items.Contains("stubID")) {
                return new Ensemble((int)res.Items.Get("stubID"));
            }
            return null;
        }

        public void Kill()
        {
            Request req = LibraryClient.Instance.CreateRequest("Server.Kill");
            Response res = Call(req);
        }
    }
}
