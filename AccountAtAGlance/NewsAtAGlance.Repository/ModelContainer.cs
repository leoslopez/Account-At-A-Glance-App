using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using NewsAtAGlance.Repository;
using Microsoft.Practices.Unity;

namespace AccountAtAGlance.Repository
{
    public static class ModelContainer
    {
        private static IUnityContainer _Instance;

        static ModelContainer()
        {
            _Instance = new UnityContainer();
        }

        public static IUnityContainer Instance
        {
            get
            {
                _Instance.RegisterType<INewsRepository, NewsRepository>(new HierarchicalLifetimeManager());                
                return _Instance;
            }
        }
    }
}
