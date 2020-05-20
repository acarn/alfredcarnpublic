using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.RPC.MQ;

namespace Blot_Server
{
    class LibraryServer : Server 
    {
        public LibraryServer() : base("BlotLibraryServer") {
            new Library(); // Create the root stub.
            Console.Out.WriteLine("LibraryServer is up and running...");
        }
    }
}
