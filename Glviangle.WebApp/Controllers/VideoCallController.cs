using Glviangle.WebApp.Helper;
using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.BookingRoomModel;
using Glviangle.WebApp.Models.TimeBookingModel;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Controllers
{
    public class VideoCallController : Controller
    {
        private readonly IApiClient _apiClient;
        private RenderView _renderView;

        public VideoCallController(IApiClient apiClient)
        {
            _apiClient = apiClient;
            _renderView = new RenderView(apiClient);
        }

        [Route("/tu-van-truc-tuyen")]
        public async Task <IActionResult> Index()
        {
            var initView = await _renderView.Render();
            var timeBookingResponse = await _apiClient.GetListTimeBookingAsync();
            initView.title = "Tư vấn trực tuyến";
            ViewData["initView"] = initView;
            var vm = new TimeBookingVM
            {
                timeBookings = timeBookingResponse
            };
            return View(vm);
        }

        [HttpPost]
        public async Task<IActionResult> Post(BookingRoomData data, string idTimeFrame, string idTimeBooking)
        {
            
            var bookingRoomResponse = await _apiClient.PostBookingRoomAsync(data);
            var timeBookingResponse = await _apiClient.GetListTimeBookingAsync();
            var timeBooking = timeBookingResponse.Find(m => m.Id == idTimeBooking);
            foreach(var timeframe in timeBooking.Data.timeFrame)
            {
                if (timeframe.id == idTimeFrame)
                    timeframe.isBooking = true;
            }
            var updateTimeBooking = await _apiClient.UpdateTimeBookingAsync(timeBooking);
            return Ok();
        }


        [Route("/sec-call/{tokenSec}")]
        public async Task<IActionResult> Sec(string tokenSec)
        {
            var initView = await _renderView.Render();
            initView.title = "Tư vấn trực tuyến";
            ViewData["initView"] = initView;
            ViewData["tokenSec"] = tokenSec;
            return View();
        }

        [Route("/client-call/{tokenClient}")]
        public async Task<IActionResult> Client(string tokenClient)
        {
            var initView = await _renderView.Render();
            initView.title = "Tư vấn trực tuyến";
            ViewData["initView"] = initView;
            ViewData["tokenClient"] = tokenClient;
            return View();
        }
    }
}
