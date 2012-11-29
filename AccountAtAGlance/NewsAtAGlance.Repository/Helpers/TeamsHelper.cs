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
            public int ActualPosition
            {
                get { return PositionProgress[4]; }
            }
                
            public int[] PointsProgress { get; set; }
            public int[] PositionProgress { get; set; }
            public int Goals_GK { get; set; }
            public int Goals_Def { get; set; }
            public int Goals_Mid { get; set; }
            public int Goals_Forw { get; set; }
            public int Goals_Total
            {
                get { return Goals_GK + Goals_Def + Goals_Mid + Goals_Forw; }
            }            
            public int ActualPoints 
            {
                get { return PointsProgress[4]; }
            }

            // Properties used on the UI
            public string TextColor { get; set; }
            public string FileImgName { get; set; }
        }

        public TeamsHelper()
        {
            teams = new List<SocccerTeam>();

            SocccerTeam river = new SocccerTeam()
            {
                Name = "River Plate",                
                Goals_GK = 0,
                Goals_Def = 2,
                Goals_Mid = 6,
                Goals_Forw = 10,
                // Contain progress related to the last 5 matches
                PointsProgress = new int[5]{3, 6, 9, 9, 10},
                PositionProgress = new int[5] { 1, 1, 1, 5, 4},
                FileImgName = "escudoRiver.jpg",
                TextColor = "Black"
            };

            SocccerTeam boca = new SocccerTeam()
            {
                Name = "Boca Jrs",
                Goals_GK = 1,
                Goals_Def = 4,
                Goals_Mid = 2,
                Goals_Forw = 12,
                // Contain progress related to the last 5 matches
                PointsProgress = new int[5] { 1, 4, 7, 7, 10 },
                PositionProgress = new int[5] { 8, 4, 3, 6, 5 },
                FileImgName = "escudoBoca.jpg",
                TextColor = "Blue"
            };

            teams.Add(river);
            teams.Add(boca);
        }

        public List<SocccerTeam> GetTeams()
        {
            return teams;
        }
    }
}
