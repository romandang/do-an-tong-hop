using Glviangle.WebApp.Models.SpecializeModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models.ServiceModel
{
    public class ServiceVM
    {
        public List<Service> services { get; set; }
        
        public List<Specialize> specializes { get; set; }
    }
}
