using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Glviangle.Application.Admin;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Glviangle.BackendApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ICategoryService _categoryService;
        public HomeController(ICategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        /// <summary>
        /// Creates a TodoItem.
        /// </summary>
        [HttpGet]
        public async Task<IActionResult> GetAllCategory()
        {
            var data = await _categoryService.ShowCategory();
            return Ok(data);
        }
    }
}
