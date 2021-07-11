using Glviangle.WebApp.Models.BlogModel;
using Glviangle.WebApp.Models.FooterModel;
using Glviangle.WebApp.Models.HeaderModel;
using Glviangle.WebApp.Models.ServiceModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models.PageModel
{
    public class View
    {
        public Header header { get; set; }

        public Footer footer { get; set; }

        public List<Service> services { get; set; }

        public List<Blog> blogs { get; set; }

        public string title { get; set; }

        public bool isHomepage = false;
    }
}
