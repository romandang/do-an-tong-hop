using Glviangle.WebApp.Entities.TimeBooking;
using Newtonsoft.Json;
using Squidex.ClientLibrary;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models.TimeBookingModel
{
    public sealed class TimeBookingData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string dayname { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public DateTime date { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public TimeFrame[] timeFrame { get; set; }

    }
}
