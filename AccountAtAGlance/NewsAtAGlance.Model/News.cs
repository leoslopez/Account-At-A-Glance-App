using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.ComponentModel.DataAnnotations;

namespace NewsAtAGlance.Model
{
    public class News
    {
        [Key]
        public int NewsId { get; set; }

        public string Title { get; set; }
        public string Url { get; set; }        
        public string Snippet { get; set; }
        public string Source { get; set; }
        public string Date { get; set; }
        public string ClusterUrl { get; set; }
        
        public int NewsUpdateId { get; set; }
    }
}
