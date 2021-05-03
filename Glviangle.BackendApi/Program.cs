using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;

namespace Glviangle.BackendApi
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IWebHostBuilder CreateHostBuilder(string[] args) {
            var builder = new WebHostBuilder()
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseKestrel()
                .UseStartup<Startup>()
                .ConfigureAppConfiguration((hostcontext, config) =>
                {
                    var env = hostcontext.HostingEnvironment;
                    config.AddJsonFile("appsettings.json", optional: true, reloadOnChange: true)
                        .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true, reloadOnChange: true);

                    if (env.IsDevelopment())
                    {
                        var assembly = Assembly.Load(new AssemblyName(env.ApplicationName).FullName);
                        config.AddUserSecrets(assembly, optional: true, reloadOnChange: true);
                    }

                    config.AddEnvironmentVariables();

                    if(args != null)
                    {
                        config.AddCommandLine(args);
                    }
                });
            return builder;
        }
    }
}
