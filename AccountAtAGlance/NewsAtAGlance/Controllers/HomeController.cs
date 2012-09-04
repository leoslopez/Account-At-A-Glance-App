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
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult CreateDatabase()
        {
            NewsContext myDbContext = new NewsContext();

            return View("Index");
        }

    }
}
