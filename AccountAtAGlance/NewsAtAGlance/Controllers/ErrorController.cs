using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Management;

namespace NewsAtAGlance.Controllers
{
    public class ErrorController : Controller
    {
        public ActionResult Index()
        {
            new LogEvent("message to myself").Raise();
            return View();
        }
    }

    public class LogEvent : WebRequestErrorEvent
    {
        public LogEvent(string message)
            : base(null, null, 100001, new Exception(message))
        {
        }
    }
}
