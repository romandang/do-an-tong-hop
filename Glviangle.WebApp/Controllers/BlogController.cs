using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.BlogModel;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class BlogController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public BlogController(IApiClient apiClient)
        {
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/blogs")]
        public async Task<IActionResult> Index()
        {
            var (page, dataBlogResponse ) = await _apiClient.GetBlogAsync(0, 3);
            var data = new BlogVM
            {
                listBlog = dataBlogResponse
            };
            var initView = await _renderView.Render();
            initView.title = "Blog";
            ViewData["initView"] = initView;
            return View(data);
        }

        [Route("/blogs/{id}")]
        public async Task<IActionResult> Detail(string id)
        {

            var data = await _apiClient.GetDetailBlogAsync(id);
            var initView = await _renderView.Render();
            initView.title = "Blog Details";
            ViewData["initView"] = initView;
            return View(data);

        }

    }
}
