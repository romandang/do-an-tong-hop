using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.AboutUsModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class AboutUsController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public AboutUsController(IApiClient apiClient)
        {
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/about-us")]
        public async Task<IActionResult> Index()
        {
            string id = "d175743e-4b99-49fe-b41c-615789f444a8";
            var aboutUsResponse = await _apiClient.GetDetailAboutUsAsync(id);
            var (pageSize, doctorResponse) = await _apiClient.GetListDoctorAsync();
            var (pageSize2, specializeResponse) = await _apiClient.GetListSpecializeAsync(0, 4);
            var data = new AboutUsVM
            {
                aboutus = aboutUsResponse,
                doctors = doctorResponse,
                specializes = specializeResponse
            };
            var initView = await _renderView.Render();
            initView.title = "About Us";
            ViewData["initView"] = initView;

            return View(data);
        }
    }
}
