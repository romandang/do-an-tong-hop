using Glviangle.WebApp.Entities.Doctor;
using Newtonsoft.Json;
using Squidex.ClientLibrary;

namespace Glviangle.WebApp.Models.DoctorModel
{
    public sealed class DoctorData
    {
        [JsonConverter(typeof(InvariantConverter))]
        public string name { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string[] avatar { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public Profile[] profile { get; set; }

        [JsonConverter(typeof(InvariantConverter))]
        public string specialist { get; set; }
    }
}
