using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.ServiceModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class ServiceController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public ServiceController(IApiClient apiClient)
        {
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/services")]
        public async Task<IActionResult> Index()
        {
            var (page, serviceResponse) = await _apiClient.GetListServiceAsync(0, 6);
            var (page2, specializeResponse) = await _apiClient.GetListSpecializeAsync(0, 6);

            var data = new ServiceVM
            {
                services = serviceResponse,
                specializes = specializeResponse
            };

            var initView = await _renderView.Render();
            initView.title = "Services";
            ViewData["initView"] = initView;

            return View(data);
        }

        [Route("/services/{id}")]
        public async Task<IActionResult> Detail(string id)
        {
            var data = await _apiClient.GetDetailServiceAsync(id);
            var initView = await _renderView.Render();
            initView.title = "Services Details";
            ViewData["initView"] = initView;

            return View(data);
        }


    }
}
