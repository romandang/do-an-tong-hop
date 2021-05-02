using Glviangle.Data.Configurations;
using Glviangle.Data.Configurations.Admin;
using Glviangle.Data.Configurations.Client;
using Glviangle.Data.EF.Entities;
using Glviangle.Data.Entities.Admin;
using Glviangle.Data.Entities.Client;
using Glviangle.Data.Extensions;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.EF
{
    public class GlviangleDBContext : DbContext
    {
        public GlviangleDBContext(DbContextOptions options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Áp dụng cấu hình cho bảng
            modelBuilder.ApplyConfiguration(new SampleConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryChildConfiguration());
            modelBuilder.ApplyConfiguration(new CategoryConfiguration());
            modelBuilder.ApplyConfiguration(new PromotionClientConfiguration());
            modelBuilder.Seed();
        }

        public DbSet<Sample> Samples { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<ChildCategory> ChildCategories { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
    }
}
