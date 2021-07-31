using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class ContactController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public ContactController(IApiClient apiClient)
        {
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/contact-us")]
        public async Task<IActionResult> Index()
        {
            var initView = await _renderView.Render();
            initView.title = "Liên hệ cho chúng tôi";
            ViewData["initView"] = initView;
            return View();
        }
    }
}
