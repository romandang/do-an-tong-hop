using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class AppointmentController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public AppointmentController(IApiClient apiClient)
        {
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/near-place")]
        public async Task<IActionResult> Index()
        {
            var initView = await _renderView.Render();
            initView.title = "Tìm bệnh viện gần bạn";
            initView.isNearPlace = true;
            ViewData["initView"] = initView;

            return View();
        }
    }
}
