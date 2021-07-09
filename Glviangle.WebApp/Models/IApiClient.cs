// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using System.Collections.Generic;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models
{
    public interface IApiClient
    {
        Task<(long Total, List<Blog> blogs)> GetBlogAsync(int page, int pageSize);

        Task<Blog> GetDetailBlogAsync(string id);

        Task<Home> GetHomeAsync(string id);

    }
}
