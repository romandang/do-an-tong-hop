using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Entities.Specialize
{
    public sealed class Reward
    {
        public string title { get; set; }

        public string description { get; set; }

        public string[] thumbnail { get; set; }

        public Achivement[] achievements { get; set; }

        public string schemaId { get; set; }
    }
}
