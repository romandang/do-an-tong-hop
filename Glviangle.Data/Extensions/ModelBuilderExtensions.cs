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
                    CategoryName = "Điện thoại",
                    Alias = "dien-thoai",
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
