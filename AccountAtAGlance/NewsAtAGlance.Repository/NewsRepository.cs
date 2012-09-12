using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NewsAtAGlance.Model;

namespace NewsAtAGlance.Repository
{
    public class NewsRepository : INewsRepository
    {
        private NewsContext _context;

        public NewsContext Context
        {
            get
            {
                if (_context == null)
                {
                    _context = new NewsContext();                    
                }
                return _context;
            }
        }

        public List<Location> GetAllLocations()
        {
            return Context.Locations.ToList<Location>();
        }
    }
}
