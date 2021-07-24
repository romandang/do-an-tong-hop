using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.BlogModel;
using Glviangle.WebApp.Models.PageModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class HomeController : Controller
    {

        private readonly IApiClient apiClient;
        private RenderView _renderView;

        public HomeController(IApiClient apiClient)
        {
            this.apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        public async Task<IActionResult> Index()
        {
            string idPage = "c830d962-ffce-4436-b23f-5219f3624926";
            var data = await apiClient.GetHomeAsync(idPage);
            var(total, blogs) = await apiClient.GetBlogAsync(0, 3);
            var initView = await _renderView.Render();
            var vm = new BlogVM
            {
                listBlog = blogs,
                total = total,
                page = 0,
                pageSize = 3,
                home = data
            };
            initView.title = "Home";
            initView.isHomepage = true;
            ViewData["initView"] = initView;
            return View(vm);
        }

        [Route("/error")]
        public async Task<IActionResult> NotFound()
        {
            return View();
        }
        
    }
}
