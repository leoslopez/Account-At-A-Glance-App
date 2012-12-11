using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace NewsAtAGlance.Repository.Helpers
{
    // TODO: looking for a web service that returns soccer teams and obtains data from there.
    public class TeamsHelper
    {
        private const int COUNT_POINTS = 7;

        List<SocccerTeam> teams;

        public class SocccerTeam
        {
            public string Name { get; set; }
            public int ActualPosition
            {
                get { return PositionProgress.OrderByDescending(x => x.axisX).FirstOrDefault().axisY; }
            }
                
            public List<DataPoint> PointsProgress { get; set; }
            public List<DataPoint> PositionProgress { get; set; }
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
                get { return PointsProgress.OrderByDescending(x => x.axisX).FirstOrDefault().axisY; }
            }

            // Properties used on the UI
            public string TextColor { get; set; }
            public string FileImgName { get; set; }
            public string AltColor { get; set; }
            public string GraphName { get; set; }
        }

        public TeamsHelper()
        {            
            teams = new List<SocccerTeam>();

            SocccerTeam river = new SocccerTeam()
            {
                Name = "River Plate",                
                Goals_GK = 2,
                Goals_Def = 2,
                Goals_Mid = 6,
                Goals_Forw = 15,
                // Contain progress related to the last 5 matches
                PointsProgress = GetDataPointList(COUNT_POINTS, new int[COUNT_POINTS] { 1, 4, 7, 7, 10, 13, 14 }),
                PositionProgress = GetDataPointList(COUNT_POINTS, new int[COUNT_POINTS] { 8, 4, 3, 6, 5, 3, 4 }),
                FileImgName = "escudoRiver.jpg",
                TextColor = "Black",
                AltColor = "Red",
                GraphName = "River"
            };

            SocccerTeam boca = new SocccerTeam()
            {
                Name = "Boca Jrs",
                Goals_GK = 0,
                Goals_Def = 4,
                Goals_Mid = 2,
                Goals_Forw = 12,
                // Contain progress related to the last 5 matches
                PointsProgress = GetDataPointList(COUNT_POINTS, new int[COUNT_POINTS] { 1, 1, 4, 7, 8, 9, 12 }),
                PositionProgress = GetDataPointList(COUNT_POINTS, new int[COUNT_POINTS] { 8, 4, 3, 6, 5, 6, 5 }),
                FileImgName = "escudoBoca.jpg",
                TextColor = "Blue",
                AltColor = "Yellow",
                GraphName = "Boca"
            };

            teams.Add(river);
            teams.Add(boca);
        }

        public List<SocccerTeam> GetTeams()
        {
            return teams;
        }

        private List<DataPoint> GetDataPointList(int count, int[] values)
        {
            List<DataPoint> list = new List<DataPoint>();

            for (int i = 0; i < count; i++)
            {
                DataPoint point = new DataPoint();
                point.axisX = i + 1; //
                point.axisY = values[i];

                list.Add(point);
            }

            return list;
        }
    }
}
