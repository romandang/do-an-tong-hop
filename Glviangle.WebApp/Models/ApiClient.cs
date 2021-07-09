// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Options;
using Squidex.ClientLibrary;

namespace Glviangle.WebApp.Models
{
    public class ApiClient : IApiClient
    {

        private readonly IContentsClient<Home, HomeData> homeClient;

        private readonly IContentsClient<Blog, BlogData> blogClient;

        public ApiClient(IOptions<SquidexOptions> appOptions)
        {
            var options = appOptions.Value;

            var clientManager =
                new SquidexClientManager(options);


            homeClient = clientManager.CreateContentsClient<Home, HomeData>("homepage");
            blogClient = clientManager.CreateContentsClient<Blog, BlogData>("blogs");

        }

        public async Task<(long Total, List<Blog> blogs)> GetBlogAsync(int page = 0, int pageSize = 3)
        {
            var query = new ContentQuery { Skip = page * pageSize, Top = pageSize };

            var posts = await blogClient.GetAsync(query);

            return (posts.Total, posts.Items);
        }


        public async Task<Home> GetHomeAsync(string id)
        {
            var data = await homeClient.GetAsync(id);
            return data;
        }

        public async Task<Blog> GetDetailBlogAsync(string id)
        {
            var data = await blogClient.GetAsync(id);
            return data;
        }

    }
}
