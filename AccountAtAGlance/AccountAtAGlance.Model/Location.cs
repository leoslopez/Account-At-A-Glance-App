using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace AccountAtAGlance.Model
{
    public class Location
    {
        [Key]
        public int LocationId { get; set; }
        public string Name { get; set; }
    }
}
