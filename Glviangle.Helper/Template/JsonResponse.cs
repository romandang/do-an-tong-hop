using System;
using System.Collections.Generic;
using System.Text;

namespace Glviangle.Core.Template
{
    public class JsonResponse<T>
    {
        public bool Success { get; set; } = true;
        public object Error { get; set; }
        public T Result { get; set; }

        public JsonResponse()
        {

        }
        public JsonResponse(T result)
        {
            this.Result = result;
        }
    }
}
