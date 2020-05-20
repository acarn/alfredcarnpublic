using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Blot.DataStructures;
using System.Messaging;

namespace Blot.RPC.MQ
{
    public class Queues
    {
        public enum Visibility { PUBLIC, PRIVATE }
        private static CacheByKey c = new CacheByKey();

        static public MessageQueue Get(string queueID, Visibility v = Visibility.PRIVATE)
        {
            if ("" == queueID) { throw new ArgumentException("Must specify queue."); }
            string p = GetPath(queueID, v);
            if (!c.Contains(p)) { CacheQueue(p); }
            MessageQueue q = (MessageQueue)c.Get(p);
            q.Formatter = new BinaryMessageFormatter();
            return q;
        }
        
        static private string GetPath(string queueID, Visibility v = Visibility.PRIVATE)
        {
            if ("" == queueID) { throw new ArgumentException("Must specify queue."); }
            return (Visibility.PRIVATE == v ? ".\\Private$\\" : ".\\") + queueID;
        }

        static private void CacheQueue(string path)
        {
            if (!MessageQueue.Exists(path)) { c.Set(path, MessageQueue.Create(path)); }
            if (!c.Contains(path)) { c.Set(path, new MessageQueue(path)); }
        }
    }
}
