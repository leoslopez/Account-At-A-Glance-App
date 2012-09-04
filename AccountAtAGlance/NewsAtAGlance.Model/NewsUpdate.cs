using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace NewsAtAGlance.Model
{
    public class NewsUpdate
    {
        [Key]
        public int NewsUpdateId { get; set; }

        public DateTime LastUpdate { get; set; }

        public int SectionId { get; set; }
        public int LocationId { get; set; }
        public int LanguageId { get; set; }
    }
}
