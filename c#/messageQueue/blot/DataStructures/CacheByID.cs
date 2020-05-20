using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Blot.DataStructures
{
    [Serializable]
    public class CacheByID
    {
        private int min = -1;
        private int max = -1;
        private int lastID = -1;
        private CacheByKey cache = null;

        public CacheByID(int min=1, int max = Int32.MaxValue)
        {
            this.min = min;
            this.max = max;
            this.lastID = min-1;
            cache = new CacheByKey();
        }

        public bool Contains(int id) { return cache.Contains(id); }

        public bool Remove(int id) { return cache.Remove(id); }

        public object Get(int id) { return cache.Contains(id) ? cache.Get(id) : null; }
        
        public int Set(object val)
        {
            int ret = GetNextID();
            cache.Set(ret, val);
            return ret;
        }
        
        private int GetNextID()
        {
            int last = lastID;
            int curr = IncrementID(last);
            while (curr != last) {
                if (!cache.Contains(curr)) { lastID = curr; return curr; }
                curr = IncrementID(curr);
            }
            throw new Exception("An unknown error has occurred.");
        }

        private int IncrementID(int value) { return (max == value) ? min : ++value; }
    }
}
