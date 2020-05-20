using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.RPC.MQ;

namespace Blot_Library
{
    class LibraryClient : Client
    {
        private static LibraryClient instance = null;
        public readonly string ServerID = "BlotLibraryServer";

        private LibraryClient() : base("BlotLibraryClient")  { }

        static public LibraryClient Instance {
            get {
                if (null == instance) { instance = new LibraryClient(); }
                return instance;
            }
        }

        public Request CreateRequest(string method) { return new Request(Instance.ClientID, Instance.ServerID, method); }
    }
}
