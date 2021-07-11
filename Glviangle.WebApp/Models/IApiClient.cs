// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using Glviangle.WebApp.Models.AboutUsModel;
using Glviangle.WebApp.Models.BlogModel;
using Glviangle.WebApp.Models.BookingModel;
using Glviangle.WebApp.Models.DoctorModel;
using Glviangle.WebApp.Models.FooterModel;
using Glviangle.WebApp.Models.HeaderModel;
using Glviangle.WebApp.Models.HomeModel;
using Glviangle.WebApp.Models.ServiceModel;
using Glviangle.WebApp.Models.SpecializeModel;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models
{
    public interface IApiClient
    {
        Task<(long Total, List<Blog> blogs)> GetBlogAsync(int page, int pageSize);
        Task<(long Total, List<Doctor> doctors)> GetListDoctorAsync(int page = 0, int pageSize = 3);
        Task<(long Total, List<Service> services)> GetListServiceAsync(int page = 0, int pageSize = 3);
        Task<(long Total, List<Specialize> specializes)> GetListSpecializeAsync(int page, int pageSize);

        Task<Specialize> GetDetailSpecializeAsync(string id);
        Task<Blog> GetDetailBlogAsync(string id);
        Task<Doctor> GetDetailDoctorAsync(string id);
        Task<Home> GetHomeAsync(string id);
        Task<Service> GetDetailServiceAsync(string id);
        Task<AboutUs> GetDetailAboutUsAsync(string id);
        Task<Header> GetDetailHeaderAsync(string id);
        Task<Footer> GetDetailFooterAsync(string id);
        Task<Booking> PostBookingAsync(BookingData booking);
    }
}
