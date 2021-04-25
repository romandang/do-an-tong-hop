using Glviangle.Data.EF;
using Glviangle.Data.Entities.Admin;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Glviangle.Application.Admin
{
    public class CategoryService : ICategoryService
    {
        private readonly GlviangleDBContext _context;
        public CategoryService(GlviangleDBContext context)
        {
            _context = context;
        }
        public Task AddCategory(Category category)
        {

            throw new NotImplementedException();
        }

        public Task<Category> DeleteCategory(int categoryId)
        {
            throw new NotImplementedException();
        }

        public async Task<List<Category>> ShowCategory()
        {
            var data = await _context.Categories.ToListAsync();
            return data;
        }

        public Task<Category> UpdateCategory(Category category)
        {
            throw new NotImplementedException();
        }
    }
}
