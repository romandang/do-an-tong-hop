using Glviangle.Data.Configurations;
using Glviangle.Data.EF.Entities;
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

        }

        public DbSet<Sample> Samples { get; set; }
    }
}
