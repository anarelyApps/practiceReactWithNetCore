namespace Trips.Data
{
    /*
    ASP.NET Core uses dependency injection as a fundamental feature 
    to manage dependencies throughout the framework. 
    In order for the dependency injection framework to know how to 
    resolve dependencies, these dependencies or “services” need to 
    be configured first.
    In addition, you can also use this to add your own services so 
    that you can make use of dependency injection within the application 
    as well; for example to resolve your own services within a controller.
    
    https://learn.microsoft.com/en-us/aspnet/core/fundamentals/dependency-injection?view=aspnetcore-2.2
    */
   public class TripService: ITripService
   {
     
     public List<Trip> GetAllTrips() => Data.Trips.ToList();
    /* {
      return Data.Trips.ToList();

     }*/
     public Trip getTripById(int tripId) => Data.Trips.FirstOrDefault(n => n.Id == tripId);
     
     public void updateTrip(int tripId, Trip trip){
      var oldTrip = Data.Trips.FirstOrDefault(n => n.Id == tripId );
      if(oldTrip != null) {

        oldTrip.Name = trip.Name;
        oldTrip.Description = trip.Description;
        oldTrip.DateStarted = trip.DateStarted;
        oldTrip.DateCompleted = trip.DateCompleted;
      }
     }
     public void DeleteTrip(int tripId)
     {
       var trip = Data.Trips.FirstOrDefault(n => n.Id == tripId);
       if(trip !=null){
           Data.Trips.Remove(trip);
       }
     }
     public void AddTrip(Trip trip){
      Data.Trips.Add(trip);
     }

   }
}