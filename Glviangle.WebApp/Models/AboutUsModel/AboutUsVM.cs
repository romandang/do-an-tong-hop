using Glviangle.WebApp.Models.DoctorModel;
using Glviangle.WebApp.Models.SpecializeModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models.AboutUsModel
{
    public class AboutUsVM
    {
        public AboutUs aboutus { get; set; }

        public List<Doctor> doctors { get; set; }

        public List<Specialize> specializes { get; set; }
    }
}
