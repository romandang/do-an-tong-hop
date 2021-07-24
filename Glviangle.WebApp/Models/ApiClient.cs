// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using System.Collections.Generic;
using System.Threading.Tasks;
using Glviangle.WebApp.Models.AboutUsModel;
using Glviangle.WebApp.Models.BlogModel;
using Glviangle.WebApp.Models.BookingModel;
using Glviangle.WebApp.Models.DoctorModel;
using Glviangle.WebApp.Models.FooterModel;
using Glviangle.WebApp.Models.HeaderModel;
using Glviangle.WebApp.Models.HomeModel;
using Glviangle.WebApp.Models.ServiceModel;
using Glviangle.WebApp.Models.SpecializeModel;
using Microsoft.Extensions.Options;
using Squidex.ClientLibrary;

namespace Glviangle.WebApp.Models
{
    public class ApiClient : IApiClient
    {

        private readonly IContentsClient<Home, HomeData> homeClient;
        private readonly IContentsClient<Blog, BlogData> blogClient;
        private readonly IContentsClient<Doctor, DoctorData> doctorClient;
        private readonly IContentsClient<Service, ServiceData> serviceClient;
        private readonly IContentsClient<Specialize, SpecializeData> specializeClient;
        private readonly IContentsClient<AboutUs, AboutUsData> aboutUsClient;
        private readonly IContentsClient<Header, HeaderData> headerClient;
        private readonly IContentsClient<Footer, FooterData> footerClient;
        private readonly IContentsClient<Booking, BookingData> bookingClient;

        public ApiClient(IOptions<SquidexOptions> appOptions)
        {
            var options = appOptions.Value;

            var clientManager =
                new SquidexClientManager(options);


            homeClient = clientManager.CreateContentsClient<Home, HomeData>("homepage");
            blogClient = clientManager.CreateContentsClient<Blog, BlogData>("blogs");
            doctorClient = clientManager.CreateContentsClient<Doctor, DoctorData>("doctors");
            serviceClient = clientManager.CreateContentsClient<Service, ServiceData>("services");
            specializeClient = clientManager.CreateContentsClient<Specialize, SpecializeData>("specializes");
            aboutUsClient = clientManager.CreateContentsClient<AboutUs, AboutUsData>("aboutus");
            headerClient = clientManager.CreateContentsClient<Header, HeaderData>("header");
            footerClient = clientManager.CreateContentsClient<Footer, FooterData>("footer");
            bookingClient = clientManager.CreateContentsClient<Booking, BookingData>("booking");
        }

        public async Task<(long Total, List<Blog> blogs)> GetBlogAsync(int page = 0, int pageSize = 3)
        {
            var query = new ContentQuery { Skip = page * pageSize, Top = pageSize };

            var posts = await blogClient.GetAsync(query);

            return (posts.Total, posts.Items);
        }

        public async Task<(long Total, List<Doctor> doctors)> GetListDoctorAsync(int page = 0, int pageSize = 3)
        {
            var query = new ContentQuery { Skip = page * pageSize, Top = pageSize };

            var posts = await doctorClient.GetAsync(query);

            return (posts.Total, posts.Items);
        }

        public async Task<(long Total, List<Service> services)> GetListServiceAsync(int page = 0, int pageSize = 3)
        {
            var query = new ContentQuery { Skip = page * pageSize, Top = pageSize };

            var posts = await serviceClient.GetAsync(query);

            return (posts.Total, posts.Items);
        }
        public async Task<(long Total, List<Specialize> specializes)> GetListSpecializeAsync(int page, int pageSize)
        {
            var query = new ContentQuery { Skip = page * pageSize, Top = pageSize };

            var posts = await specializeClient.GetAsync(query);

            return (posts.Total, posts.Items);
        }

        public async Task<Booking> PostBookingAsync(BookingData booking)
        {
            var data = await bookingClient.CreateAsync(booking);
            return data;
        }

        public async Task<Header> GetDetailHeaderAsync(string id)
        {
            var data = await headerClient.GetAsync(id);
            return data;
        }
        public async Task<Footer> GetDetailFooterAsync(string id)
        {
            var data = await footerClient.GetAsync(id);
            return data;
        }


        public async Task<AboutUs> GetDetailAboutUsAsync(string id)
        {
            var data = await aboutUsClient.GetAsync(id);
            return data;
        }

        public async Task<Specialize> GetDetailSpecializeAsync(string id)
        {
            var data = await specializeClient.GetAsync(id);
            return data;
        }

        public async Task<Service> GetDetailServiceAsync(string id)
        {
            var data = await serviceClient.GetAsync(id);
            return data;
        }
        public async Task<Doctor> GetDetailDoctorAsync(string id)
        {
            var data = await doctorClient.GetAsync(id);
            return data;
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
