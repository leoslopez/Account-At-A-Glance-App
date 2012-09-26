using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NewsAtAGlance.Model;
using AccountAtAGlance.Model.Repository.Helpers;
using System.Transactions;

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

        // TODO: localDataOnly should be calculated, defined in web.config or selected by the user.
        public List<News> GetNews(string language, string section, bool localDataOnly)
        {
            List<News> news = null;
            
            if (localDataOnly)
            {                
                news = Context.News.ToList();
            }
                        
            if(!localDataOnly || news.Count == 0)
            {
                var engine = new NewsEngine();
                news = engine.GetNews(language, section);
                InsertNews(news);
            }

            return news;
        }

        public bool InsertNews(List<News> newsToInsert)
        {
            if (newsToInsert != null && newsToInsert.Count > 0)
            {
                using (var transaction = new TransactionScope())
                {
                    using (Context)
                    {
                        DeleteNews(Context);

                        foreach (var aNew in newsToInsert)
                        {
                            Context.News.Add(aNew);
                        }

                        try
                        {
                            Context.SaveChanges();
                        }
                        catch (Exception exp)
                        {
                            throw new Exception("Error inserting news in database.", exp);
                        }
                    }

                    transaction.Complete();
                }
            }

            return true;
        }

        private bool DeleteNews(NewsContext context)
        {
            try
            {
                context.Database.ExecuteSqlCommand("DELETE FROM News;");
            }
            catch (Exception exp)
            {
                throw new Exception("Error deleting news in database.", exp);
            }

            return true;
        }
    }
}
