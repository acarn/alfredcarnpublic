using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;

namespace Blot.DataStructures
{
    [Serializable]
    public class CacheByKey {

        private Hashtable h = new Hashtable();
        private ArrayList a = new ArrayList();

        public void Set(CacheByKey rhs) { foreach (string k in rhs.Keys) { Set(k, rhs.Get(k)); } }

        public void Set(object key, object val)
        {
            if (!h.Contains(key)) { a.Add(key); }
            h[key] = val;
        }

        public object Get(object key)
        {
            if (h.Contains(key)) { return h[key]; }
            else { throw new ArgumentOutOfRangeException("Key does not exist."); }
        }

        public object GetAt(int i)
        {
            if (0 <= i && i < a.Count) { return h[a[i]]; }
            else { throw new ArgumentOutOfRangeException(); }
        }

        public bool Remove(object key)
        {
            bool ret = h.Contains(key);
            if (ret)
            {
                a.Remove(key);
                h.Remove(key);
            }
            return ret;
        }

        public bool Contains(object key) { return h.Contains(key); }

        public void Clear() { h.Clear(); a.Clear(); }

        public IList Keys
        {
            get
            {
                ArrayList ret = new ArrayList();
                foreach (string s in a) { ret.Add(s); }
                return ret;
            }
        }

        public int Count() { return h.Count; }
    }
}
