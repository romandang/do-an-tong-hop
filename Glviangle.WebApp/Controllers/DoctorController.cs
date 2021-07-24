using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.DoctorModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class DoctorController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public DoctorController(IApiClient apiClient){
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/doctors")]
        public async Task<IActionResult> Index()
        {
            var (page, dataResponse) = await _apiClient.GetListDoctorAsync(0, 4);
            var data = new DoctorVM
            {
                doctors = dataResponse
            };
            var initView = await _renderView.Render();
            initView.title = "Our Doctor";
            ViewData["initView"] = initView;
            return View(data);
        }

        [Route("/doctors/{id}")]
        public async Task<IActionResult> Detail(string id)
        {
            var dataResponse = await _apiClient.GetDetailDoctorAsync(id);
            var initView = await _renderView.Render();
            initView.title = "Doctor details";
            ViewData["initView"] = initView;
            return View(dataResponse);
        }
    }
}
