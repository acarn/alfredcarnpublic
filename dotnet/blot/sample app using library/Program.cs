using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot_Library;
using Blot_Library.DAO;

namespace Blot_Client
{
    // This represents an app connected to the Blot-Library dll.
    class Program
    {
        static void Main(string[] args)
        {
            Console.In.ReadLine();

            Ensemble e1 = Library.Instance.GetEnsemble(1);
            Console.Out.WriteLine(e1.GetEnsembleName());

            Ensemble e2 = Library.Instance.GetEnsemble(2);
            Console.Out.WriteLine(e2.GetEnsembleName());
            
            Console.In.ReadLine();
            Library.Instance.Kill();
            Console.In.ReadLine();
        }
    }
}
