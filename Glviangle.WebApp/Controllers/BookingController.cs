using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.BookingModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class BookingController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public BookingController(IApiClient apiClient){
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/booking")]
        public async Task<IActionResult> Index()
        {
            var initView = await _renderView.Render();
            initView.title = "Appoinment";
            ViewData["initView"] = initView;
            return View();
        }

        [HttpPost]
        public async Task<IActionResult> Post(BookingData booking)
        {
            var data = await _apiClient.PostBookingAsync(booking);
            
            var initView = await _renderView.Render();
            initView.title = "Appoinment";
            ViewData["initView"] = initView;
            return Redirect("/booking");
        }
    }
}
