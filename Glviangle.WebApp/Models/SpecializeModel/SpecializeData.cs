using Glviangle.WebApp.Entities.Specialize;
using Newtonsoft.Json;
using Squidex.ClientLibrary;

namespace Glviangle.WebApp.Models.SpecializeModel
{
    public sealed class SpecializeData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string title { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] thumbnail { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string thumbnailIcon { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string description { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public Details[] details { get; set; }
    }
}
