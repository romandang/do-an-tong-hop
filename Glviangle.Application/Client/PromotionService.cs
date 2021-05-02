using Glviangle.Data.EF;
using Glviangle.Data.Entities.Client;
using Glviangle.ViewModel.Client.Promotion;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Glviangle.Application.Client
{
    public class PromotionService : IPromotionService
    {
        private readonly GlviangleDBContext _context;

        public PromotionService(GlviangleDBContext context)
        {
            _context = context;
        }

        public async Task<List<PromotionViewResponse>> getAllPromotion()
        {
            var listPromotion = await _context.Promotions.ToListAsync();
            List<PromotionViewResponse> listViewPromotion = new List<PromotionViewResponse>();

            foreach(var item in listPromotion)
            {
                PromotionViewResponse promotion = new PromotionViewResponse();
                promotion.Title = item.Title;
                promotion.Description = item.Description;
                promotion.Place = item.Place;
                promotion.Thumbnail = item.Thumbnail;
                promotion.DateFrom = item.DateFrom.ToString("dd/MM/yyyy");
                promotion.DateTo = item.DateTo.ToString("dd/MM/yyyy");

                listViewPromotion.Add(promotion);
            }
            return listViewPromotion;
        }
    }
}
