using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blot_Server
{
    class Program
    {
        static void Main(string[] args)
        {
            LibraryServer svr = new LibraryServer();
            svr.Run();
        }
    }
}
