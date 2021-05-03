using Glviangle.Data.Entities.Admin;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Configurations.Admin
{
    public class CategoryConfiguration : IEntityTypeConfiguration<Category>
    {
        public void Configure(EntityTypeBuilder<Category> builder)
        {
            builder.ToTable("Category");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.Alias).HasMaxLength(100).IsRequired().IsUnicode();
            builder.Property(m => m.CategoryName).HasMaxLength(100).IsRequired().IsUnicode();
        }
    }
}
