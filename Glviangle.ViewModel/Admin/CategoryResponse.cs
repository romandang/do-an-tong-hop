using Glviangle.Data.Entities.Admin;
using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.ViewModel.Admin
{
    public class CategoryResponse
    {
        public CategoryResponse()
        {
            Items = new List<Category>();
        }

        public List<Category> Items { get; set; }
    }
}
