using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NewsAtAGlance.Repository;
using NewsAtAGlance.Repository.Helpers;

namespace NewsAtAGlance.Controllers
{
    public class DataServiceController : Controller
    {
        INewsRepository _NewsRepository;

        public DataServiceController(INewsRepository newsRepo)
        {
            _NewsRepository = newsRepo;
        }

        // TODO: verify parameters
        public ActionResult GetNews(int locationId, int languageId, int sectionId)
        {            
            return Json(_NewsRepository.GetNews("es", sectionId.ToString(), false) , JsonRequestBehavior.AllowGet);
        }
        
        public ActionResult GetTeams()
        {
            return Json(new TeamsHelper().GetTeams(), JsonRequestBehavior.AllowGet);
        }
    }
}
