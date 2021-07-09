using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Glviangle.WebApp.Models
{
    public class BlogVM
    {
        public List<Blog> listBlog { get; set; }

        public long total { get; set; }

        public int page { get; set; }

        public int pageSize { get; set; }

        public Home home { get; set; }

    }
}
