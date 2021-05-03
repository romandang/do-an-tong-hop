using Glviangle.Data.Entities.Admin;
using Glviangle.Data.Entities.Client;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Extensions
{
    public static class ModelBuilderExtensions
    {
        public static void Seed(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(
                new Category()
                {
                    Id = "Cate01",
                    CategoryName = "Bệnh viện",
                    Alias = "benh-vien",
                },
                new Category()
                {
                    Id = "Cate02",
                    CategoryName = "Khám phá",
                    Alias = "kham-pha",
                },
                new Category()
                {
                    Id = "Cate03",
                    CategoryName = "Dịch vụ",
                    Alias = "dich-vu",
                },
                new Category()
                {
                    Id = "Cate04",
                    CategoryName = "Lên kế hoạch",
                    Alias = "len-ke-hoach",
                }
            );
            modelBuilder.Entity<ChildCategory>().HasData(
                new ChildCategory()
                {
                    Id = "CCate01",
                    CategoryName = "Điện thoại Samsung",
                    Alias = "dien-thoai-samsung",
                    CategoryParentId = "Cate01"
                }
            );

            modelBuilder.Entity<Promotion>().HasData(
                new Promotion()
                {
                    Id = "PRO04",
                    DateFrom = DateTime.Parse("2021-04-01"),
                    DateTo = DateTime.Now,
                    Description = "Alo 1234",
                    Place = "Bệnh viện Bình Dân",
                    Thumbnail = "https://gleneagles.azureedge.net/images/default-source/community/lung-cancer_event-banner-01-(1).tmb-event.jpg?sfvrsn=73d05bfe_1",
                    Title = "Lung Cancer Screening Package"
                }
                );

        }
    }
}
