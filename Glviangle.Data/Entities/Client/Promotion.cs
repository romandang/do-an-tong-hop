using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Entities.Client
{
    public class Promotion
    {
        public string Id { get; set; }
        public string Thumbnail { get; set; }
        public string Title { get; set; }
        public DateTime DateFrom { get; set; }
        public DateTime DateTo { get; set; }
        public string Description { get; set; }
        public string Place { get; set; }

    }
}
