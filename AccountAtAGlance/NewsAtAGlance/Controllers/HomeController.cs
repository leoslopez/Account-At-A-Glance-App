using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using AccountAtAGlance.Repository;

namespace AccountAtAGlance.Controllers
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
