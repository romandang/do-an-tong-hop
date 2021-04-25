using Glviangle.Core.Models;
using System;

namespace Glviangle.Helper
{
    public class RenderHelper
    {
        public static RenderContentViewModel ReadHtmlString(string pageName)
        {
            var htmlString = System.IO.File.ReadAllLines($"./wwwroot/html/{pageName}/bodyCopy.html");
            var headerString = System.IO.File.ReadAllLines($"./wwwroot/html/{pageName}/headCopy.html");
            var model = new RenderContentViewModel()
            {
                Content = string.Join("", htmlString),
                Head = string.Join("", headerString)
            };
            return model;
        }

    }
}
