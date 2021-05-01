using Glviangle.Data.Entities.Admin;
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
        }
    }
}
