using Glviangle.WebApp.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class BlogController : Controller
    {
        private readonly IApiClient _apiClient;
        public BlogController(IApiClient apiClient)
        {
            _apiClient = apiClient;
        }
        [Route("/blog-detail/{id}")]
        public async Task<IActionResult> Index(string id)
        {

            var data = await _apiClient.GetDetailBlogAsync(id);
            return View(data);

        }

    }
}
