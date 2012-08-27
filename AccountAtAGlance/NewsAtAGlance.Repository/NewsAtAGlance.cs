using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using AccountAtAGlance.Model;
using System.Configuration;

namespace AccountAtAGlance.Repository
{
    public class NewsAtAGlance : DbContext
    {
        public DbSet<News> News { get; set; }
        public DbSet<NewsUpdate> NewsUpdates { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Section> Sections { get; set; }

        public NewsAtAGlance()
        {
            Database.Connection.ConnectionString = ConfigurationManager.ConnectionStrings[1].ToString();
            Database.Initialize(true);
        }

        public int CleanNews(int newsUpdateId)
        {
            return Database.ExecuteSqlCommand("DeleteNews", newsUpdateId);
        }
    }
}
