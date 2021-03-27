using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Glviangle.Data.EF
{
    public class GlviangleDBContextFactory : IDesignTimeDbContextFactory<GlviangleDBContext>
    {
        public GlviangleDBContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();

            var connectionString = configuration.GetConnectionString("GlviangleDb");
            var optionsBuilder = new DbContextOptionsBuilder<GlviangleDBContext>();
            optionsBuilder.UseSqlServer(connectionString);
            return new GlviangleDBContext(optionsBuilder.Options);

        }
    }

}
