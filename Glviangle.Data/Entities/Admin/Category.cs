using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Entities.Admin
{
    public class Category
    {
        public string Id { get; set; }
        public string CategoryName { get; set; }
        public string Alias { get; set; }
        public List<ChildCategory> listChildCategory { get; set; }
    }
}
