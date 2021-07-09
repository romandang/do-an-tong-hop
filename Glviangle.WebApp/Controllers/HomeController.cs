using Glviangle.WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class HomeController : Controller
    {

        private readonly IApiClient apiClient;

        public HomeController(IApiClient apiClient)
        {
            this.apiClient = apiClient;
        }

        public async Task<IActionResult> Index()
        {
            string idPage = "c830d962-ffce-4436-b23f-5219f3624926";
            var data = await apiClient.GetHomeAsync(idPage);
            var(total, blogs) = await apiClient.GetBlogAsync(0, 3);
            var vm = new BlogVM
            {
                listBlog = blogs,
                total = total,
                page = 0,
                pageSize = 3,
                home = data
            };

            return View(vm);
        }

        [Route("/error")]
        public async Task<IActionResult> NotFound()
        {
            return View();
        }
        
    }
}
