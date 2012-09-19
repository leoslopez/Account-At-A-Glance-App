using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NewsAtAGlance.Model;
using AccountAtAGlance.Model.Repository.Helpers;

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

        public List<News> GetNews(string language, string section, bool localDataOnly)
        {
            List<News> news = null;
            
            if (localDataOnly)
            {
                //Hit DB to get values
                using (Context)
                {
                    news = Context.News.ToList();
                }
            }
            else
            {
                var engine = new NewsEngine();
                news = engine.GetNews(language, section);
            }

            return news;
        }

        public List<Location> GetAllLocations()
        {
            return Context.Locations.ToList<Location>();
        }
    }
}
