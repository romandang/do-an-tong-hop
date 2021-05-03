using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Entities.Admin
{
    public class ChildCategory
    {
        public string Id { get; set; }
        public string CategoryName { get; set; }
        public string CategoryParentId { get; set; }
        public string Alias { get; set; }
        public Category category { get; set; }

    }
}
