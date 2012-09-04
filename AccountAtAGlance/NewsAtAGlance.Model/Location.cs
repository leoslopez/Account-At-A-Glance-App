using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace NewsAtAGlance.Model
{
    public class Location
    {
        [Key]
        public string LocationCode { get; set; }
        public string Name { get; set; }
    }
}
