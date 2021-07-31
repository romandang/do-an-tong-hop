using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Entities.TimeBooking
{
    public class TimeFrame
    {
        public string id { get; set; }

        public DateTime timeFrom { get; set; }

        public DateTime timeTo { get; set; }

        public bool isBooking { get; set; }

        public string schemaId { get; set; }
    }
}
