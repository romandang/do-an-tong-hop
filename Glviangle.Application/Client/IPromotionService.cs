using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Glviangle.Data.Entities.Client;
using Glviangle.ViewModel.Client.Promotion;

namespace Glviangle.Application.Client
{
    public interface IPromotionService
    {
        public Task<List<PromotionViewResponse>> getAllPromotion();
    }
}
