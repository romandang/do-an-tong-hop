using Glviangle.WebApp.Entities.Service;
using Newtonsoft.Json;
using Squidex.ClientLibrary;

namespace Glviangle.WebApp.Models.ServiceModel
{
    public sealed class ServiceData
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
