using Glviangle.Data.EF.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Configurations
{
    public class SampleConfiguration : IEntityTypeConfiguration<Sample>
    {
        public void Configure(EntityTypeBuilder<Sample> builder)
        {

            // builder.ToTable([Tên bảng ]);
            // X builder.HasKey() Đặt khóa chính cho bảng
            // builder.Property(x=> x.value) Đặt thuộc tính cho bảng 

            builder.ToTable("Sample");
            builder.HasKey(x => x.Key);
            builder.Property(x => x.Value).HasMaxLength(100).IsRequired();
        }
    }
}
