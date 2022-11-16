using System;
namespace Trips.Data
{

    public static class Data{

         public static List<Trip> Trips => allTrips;

         static List<Trip> allTrips = new List<Trip>()
         {
            new Trip() {
                Id=1,
                Name="",
                Description="",
                DateStarted = new DateTime(2017,01,20),
                DateCompleted=null
            },
            new Trip() {
                Id=2,
                Name="",
                Description="",
                DateStarted = new DateTime(2015,01,20),
                DateCompleted=null
            }
         };

    }
}