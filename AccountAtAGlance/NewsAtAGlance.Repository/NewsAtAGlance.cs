using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using AccountAtAGlance.Model;
using System.Configuration;
using NewsAtAGlance.Repository;

namespace AccountAtAGlance.Repository
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

            // TODO: this is not working, should be relocate into Glabal.asax in Application_Start method and verify again.
            //Database.SetInitializer(new SchemaInitializer());        
        }

        public int CleanNews(int newsUpdateId)
        {
            return Database.ExecuteSqlCommand("DeleteNews", newsUpdateId);
        }
    }
}
