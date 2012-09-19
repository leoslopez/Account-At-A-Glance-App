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
            //TODO: unnecessary code to verify database deployment in appHarbor. It should be removed.
            var locations = _newsRepository.GetAllLocations().Select(l => l.Name);
            ViewBag.Locations = locations;
            
            // TODO: "0" identify "Top Stories", replace this hard coded by enum.
            _newsRepository.GetNews("es", "0", false);

            return View();
        }        

    }
}
