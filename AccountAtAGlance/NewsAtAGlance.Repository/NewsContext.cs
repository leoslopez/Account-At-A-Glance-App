using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using NewsAtAGlance.Model;
using System.Configuration;
using NewsAtAGlance.Repository;

namespace NewsAtAGlance.Repository
{
    public class NewsContext : DbContext
    {
        public DbSet<News> News { get; set; }
        public DbSet<NewsUpdate> NewsUpdates { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Section> Sections { get; set; }

        public NewsContext()
        {
            Database.Connection.ConnectionString = ConfigurationManager.ConnectionStrings[1].ToString();
            Database.CreateIfNotExists();
        }

        //public int CleanNews(int newsUpdateId)
        //{
        //    return Database.ExecuteSqlCommand("DeleteNews", newsUpdateId);
        //}
    }
}
