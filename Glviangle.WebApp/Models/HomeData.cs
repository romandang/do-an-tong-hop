// ==========================================================================
//  Squidex Headless CMS
// ==========================================================================
//  Copyright (c) Squidex UG (haftungsbeschraenkt)
//  All rights reserved. Licensed under the MIT license.
// ==========================================================================

using System.Collections.Generic;
using Glviangle.WebApp.Entities.Home;
using Newtonsoft.Json;
using Squidex.ClientLibrary;

namespace Glviangle.WebApp.Models
{
    public sealed class HomeData
    {

        [JsonConverter(typeof(InvariantConverter))]
        public HomeSlider[] homeSlider { get; set; }

    }
}
