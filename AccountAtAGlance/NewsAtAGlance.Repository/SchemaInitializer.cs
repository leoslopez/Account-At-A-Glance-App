using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.Entity;
using AccountAtAGlance.Repository;
using AccountAtAGlance.Model;

namespace NewsAtAGlance.Repository
{
    public class SchemaInitializer :
             DropCreateDatabaseIfModelChanges<NewsContext>
    {
        protected override void Seed(NewsContext context)
        {
            base.Seed(context);

            Language language1 = new Language()
            {
                LanguageCode = "es",
                Name = "españa"
            };

            context.Languages.Add(language1);

            Location location1 = new Location()
            {
                LocationCode = "ar",
                Name = "argentina"
            };

            context.Locations.Add(location1);

            context.SaveChanges();
        }        
    }
}
