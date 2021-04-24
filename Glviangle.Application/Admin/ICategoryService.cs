using Glviangle.Data.Entities.Admin;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Glviangle.Application.Admin
{
    public interface ICategoryService
    {
        public Task AddCategory(Category category);
        public Task<Category> UpdateCategory(Category category);

        public Task<Category> DeleteCategory(int categoryId);

        public Task ShowCategory();
    }
}
