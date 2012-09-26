using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NewsAtAGlance.Repository;

namespace NewsAtAGlance.Controllers
{
    public class HomeController : Controller
    {
        NewsRepository _newsRepository = new NewsRepository();

        public ActionResult Index()
        {
           // TODO: "0" identify "Top Stories", replace this hard coded by enum.
            var news = _newsRepository.GetNews("es", "0", false);

            return View(news);
        }        

    }
}
