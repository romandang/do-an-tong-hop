using Glviangle.WebApp.Entities.Page;
using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models.HeaderModel
{
    public sealed class HeaderData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string email { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] logo { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string phone { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string workingtime { get; set; }

        public Social social { get; set; }

    }
}
