namespace Trips.Data
{
    public interface ITripService 
    {
      List<Trip> GetAllTrips();
      Trip getTripById(int tripId);
      void updateTrip(int tripId, Trip trip);
      void DeleteTrip(int tripId);
      void AddTrip(Trip trip);
    }
}