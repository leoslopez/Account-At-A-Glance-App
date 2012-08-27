using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace AccountAtAGlance.Model
{
    public class Language
    {
        [Key]
        public int LanguageId { get; set; }
        public string Name { get; set; }
    }
}
