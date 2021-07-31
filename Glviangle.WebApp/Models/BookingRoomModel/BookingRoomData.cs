using Newtonsoft.Json;
using Squidex.ClientLibrary;

namespace Glviangle.WebApp.Models.BookingRoomModel
{
    public sealed class BookingRoomData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string clientLinkCall { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string secLinkCall { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string name { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string phone { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string gender { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string service { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string message { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string timeFrom { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string timeTo { get; set; }

    }
}
