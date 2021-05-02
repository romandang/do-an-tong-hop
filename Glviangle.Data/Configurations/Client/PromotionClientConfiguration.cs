using Glviangle.Data.Entities.Client;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Configurations.Client
{
    public class PromotionClientConfiguration : IEntityTypeConfiguration<Promotion>
    {
        public void Configure(EntityTypeBuilder<Promotion> builder)
        {
            builder.ToTable("Promotion");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Description).IsUnicode().IsRequired();
            builder.Property(x => x.Title).IsUnicode().IsRequired();
            builder.Property(x => x.Place).IsUnicode().IsRequired();
        }
    }
}
