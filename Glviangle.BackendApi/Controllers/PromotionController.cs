using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Glviangle.Application.Client;
using Glviangle.Core.Template;
using Glviangle.ViewModel.Client.Promotion;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Glviangle.BackendApi.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class PromotionController : ControllerBase
    {
        private readonly IPromotionService _service;
        public PromotionController(IPromotionService promotionService)
        {
            _service = promotionService;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllPromotion()
        {
            var data = await _service.getAllPromotion();
            return Ok(data);
        }


    }
}
