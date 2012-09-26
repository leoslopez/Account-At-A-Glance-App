using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NewsAtAGlance.Model;

namespace NewsAtAGlance.Repository
{
    public interface INewsRepository
    {
        List<News> GetNews(string language, string section, bool localDataOnly);
        bool InsertNews(List<News> newsToInsert);        
    }
}
