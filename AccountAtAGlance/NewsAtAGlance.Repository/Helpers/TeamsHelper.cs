using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NewsAtAGlance.Repository.Helpers
{
    // TODO: looking for a web service that returns soccer teams and obtains data from there.
    public class TeamsHelper
    {
        List<SocccerTeam> teams;

        public class SocccerTeam
        {
            public string Name { get; set; }
            public int ActualPosition { get; set; }
            public int[] PointsProgress { get; set; }            
            public int Goals_GK { get; set; }
            public int Goals_Def { get; set; }
            public int Goals_Mid { get; set; }
            public int Goals_Forw { get; set; }
            public int Goals_Total
            {
                get { return Goals_GK + Goals_Def + Goals_Mid + Goals_Forw; }
            }
            public string FileImgName { get; set; }
            public int ActualPoints 
            {
                get { return PointsProgress[4]; }
            }
        }

        public TeamsHelper()
        {
            teams = new List<SocccerTeam>();

            SocccerTeam river = new SocccerTeam()
            {
                Name = "River Plate",
                ActualPosition = 8,
                Goals_GK = 0,
                Goals_Def = 2,
                Goals_Mid = 6,
                Goals_Forw = 10,
                // Contain progress related to the last 5 matches
                PointsProgress = new int[5]{3, 6, 9, 9, 10},
                FileImgName = "escudoRiver.jpg"
            };

            teams.Add(river);
        }

        public List<SocccerTeam> GetTeams()
        {
            return teams;
        }
    }
}
