using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NewsAtAGlance.Repository;
using NewsAtAGlance.Model;

namespace NewsAtAGlance.Controllers
{
    public class HomeController : Controller
    {
        NewsRepository _newsRepository = new NewsRepository();

        public ActionResult Index()
        {
            List<News> news = new List<News>();

           // TODO: "0" identify "Top Stories", replace this hard coded by enum.
            try
            {
                news = _newsRepository.GetNews("es", "0", false);
            }
            catch (Exception ex)
            {
                new LogEvent(ex.Message);
            }

            return View(news);
        }        

    }
}
