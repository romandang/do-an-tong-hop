using Glviangle.WebApp.Entities.AboutUs;
using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace Glviangle.WebApp.Models.AboutUsModel
{
    public sealed class AboutUsData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string title { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string subtitle { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string content { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public WhyChooseUs[] whychooseus { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] images1 { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] images2 { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] images3 { get; set; }

}
}
