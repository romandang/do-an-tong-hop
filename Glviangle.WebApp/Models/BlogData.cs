using Glviangle.WebApp.Entities.Blog;
using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models
{
    public sealed class BlogData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string title { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string description { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string dateCreate { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] thumbnail { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public Detail[] detail { get; set; }
    }
}
