using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using NewsAtAGlance.Repository;

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
    }
}
