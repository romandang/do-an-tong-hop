using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Data.Entities.Admin
{
    public class ChildCategory
    {
        public Guid Id { get; set; }
        public string CategoryName { get; set; }
        public Guid CategoryParentId { get; set; }
        public string Alias { get; set; }
        public Category category { get; set; }

    }
}
