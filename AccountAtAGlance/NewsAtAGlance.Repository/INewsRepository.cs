using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NewsAtAGlance.Model;

namespace NewsAtAGlance.Repository
{
    public interface INewsRepository
    {
        List<Location> GetAllLocations();
    }
}
