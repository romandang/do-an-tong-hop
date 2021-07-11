using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models.BookingModel
{
    public sealed class BookingData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string name { get; set; }
        [JsonConverter(typeof(InvariantConverter))]
        public string email { get; set; }
        [JsonConverter(typeof(InvariantConverter))]
        public DateTime date { get; set; }
        [JsonConverter(typeof(InvariantConverter))]
        public string phone { get; set; }
        [JsonConverter(typeof(InvariantConverter))]
        public string category { get; set; }
        [JsonConverter(typeof(InvariantConverter))]
        public string gender { get; set; }
        [JsonConverter(typeof(InvariantConverter))]
        public DateTime dateOfBirth { get; set; }
        [JsonConverter(typeof(InvariantConverter))]
        public string message { get; set; }

    }
}
