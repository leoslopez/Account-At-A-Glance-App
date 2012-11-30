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
           return View();
        }        

    }
}
