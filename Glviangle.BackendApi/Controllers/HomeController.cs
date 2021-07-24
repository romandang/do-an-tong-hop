using System.Threading.Tasks;
using Glviangle.Application.Admin;
using Microsoft.AspNetCore.Mvc;
using RestSharp;

namespace Glviangle.BackendApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        /// <summary>
        /// Creates a TodoItem.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAllCategory()
        {
            //var client = new RestClient($"https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=SI-09 Khu phố Garden Court 2, Phường Tân Phong, Quận 7, TP Hồ Chí Minh&inputtype=textquery&fields=photos,formatted_address,name,rating,opening_hours,geometry&key=AIzaSyD1svkBdvXL4wfrEjOpyNnI1AiBY2_SGiY");
            var client = new RestClient($"https://opendata.hochiminhcity.gov.vn/api/action/datastore/search.json?resource_id=8b8d167a-9505-4ba7-a76d-3063dd81768e&limit=1000");
            var request = new RestRequest(Method.GET);
            IRestResponse response = await client.ExecuteAsync(request);
            var data = Newtonsoft.Json.JsonConvert.DeserializeObject<dynamic>(response.Content);
            
            //TODO: transform the response here to suit your needs

            return Ok(data);
        }
    }
}
