using Glviangle.WebApp.Models;
using Glviangle.WebApp.Models.PageModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Helper
{
    public class RenderView
    {
        private readonly IApiClient _apiClient;
        public RenderView(IApiClient apiClient) {
            _apiClient = apiClient;
        }

        public async Task<View> Render()
        {
            var (page, blogs) = await _apiClient.GetBlogAsync(0, 6);
            var (page2, services) = await _apiClient.GetListServiceAsync(0, 6);
            var header = await _apiClient.GetDetailHeaderAsync("0aa6677c-8a6e-464c-921f-c1a751b1ba51");
            var footer = await _apiClient.GetDetailFooterAsync("dcd2908a-259a-44aa-a8a8-f99790b9ba35");
            var data = new View
            {
                blogs = blogs,
                footer = footer,
                header = header,
                services = services
            };
            return data;
        }
    }
}
