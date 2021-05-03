using Glviangle.Data.Entities.Admin;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Configurations.Admin
{
    public class CategoryChildConfiguration : IEntityTypeConfiguration<ChildCategory>
    {
        public void Configure(EntityTypeBuilder<ChildCategory> builder)
        {
            builder.ToTable("CategoryChild");
            builder.HasKey(m => m.Id);
            builder.Property(m => m.Alias).HasMaxLength(100).IsRequired().IsUnicode();
            builder.Property(m => m.CategoryName).HasMaxLength(100).IsRequired().IsUnicode();
            builder.HasOne(m => m.category).WithMany(m => m.listChildCategory).HasForeignKey(x => x.CategoryParentId);
        }
    }
}
