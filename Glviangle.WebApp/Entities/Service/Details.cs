using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Entities.Service
{
    public sealed class Details
    {
        public string[] banner { get; set; }

        public string content { get; set; }

        public Reward rewards { get; set; }

        public Price[] prices { get; set; }
    }
}
