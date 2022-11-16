import react, {Component} from 'react';
import {compose} from 'redux';
import axios from 'axios';
import {connect} from 'react-redux';
import {getAllTrips} from '../../actions/tripActions';

import { useNavigate, useParams } from "react-router-dom";

export class Trips extends Component
{
    constructor(props) {
        super(props);

        
        this.onTripUpdate = this.onTripUpdate.bind(this);
        this.onTripDelete = this.onTripDelete.bind(this);

        this.state = {
            trips:[],
            loading: true,
            failed:false,
            error:''
        }

    }

    onTripUpdate(id) {
     // const {history} = this.props;
     
      //  history.push("/update/"+id);
       this.props.navigate("/Update/"+id); 
     //this.context.router.history.push("/Update/"+id);
    }

    onTripDelete(id) {
       // const {history} = this.props;
   
        this.props.navigate('/delete/'+id);
      
        //history.push("/delete/"+id);  
    }

    componentDidMount() {
      //  this.populateTripsData();
      // console.log(this.state.trips);
       this.props.getAllTrips();
    }

    componentDidUpdate(prevProps){
        if (prevProps.trips.data != this.props.trips.data){
            this.setState({trips: this.props.trips.data});
        }
    }

    /*Axios: send request to the API endpoint.
    npm install axios --save */
  /*  populateTripsData(){
    
    // Add Controller route (file Controller the same value in [Route])
     //  to the context (file ClientApp/src/setupProxy.js)
    //   ex. [Route("api/[controller]")] 
      axios.get("api/Trips/GetTrips").then(result=>{
        const response = result.data;
        this.setState({trips:response, loading: false, failed:false,error:''});
      }).catch(error => {
        this.setState({trips:[], loading: false, failed:true,error:"Trips could not be loaded"});
      })
    }*/


    renderAllTripsTable(trips) {
        return(
            <table className='table table-striped'>
                <thead>
                   <tr>
                      <th>Name</th>
                      <th>Description</th>
                      <th>Date Started</th>
                      <th>Date Completed</th>
                      <th>Actions</th>
                   </tr>
                </thead>
                <tbody> 
                    
                    { 
                        trips.map(trip =>(
                            <tr key={trip.id}>
                              <td>{trip.name}</td>
                              <td>{trip.description}</td>
                              <td>{new Date(trip.dateStarted).toLocaleDateString()}</td>
                              <td>{trip.dateCompleted?new Date(trip.dateStarted).toLocaleDateString():'-'}</td>
                              <td> <div className='form-group'>
                                   <button className='btn btn-success' onClick={()=>this.onTripUpdate(trip.id)}>Update</button>
                                   <button className='btn btn-danger' onClick={()=>this.onTripDelete(trip.id)}>Delete</button>
                              </div>
                               </td>
                           </tr>
                        ))
                    }
                   
                    
                </tbody>
            </table>
        );
    }

    render(){
       /*  let content = this.state.loading ? (
         <p>
             <em>Loading...</em>
         </p>) : (this.state.failed ? (
            <div>
               <em>{this.state.error}</em>
           </div>
         ) : this.renderAllTripsTable(this.state.trips))
       */
      let content = this.props.trips.loading ? 
        (
            <p>
            <em>Loading...</em>
        </p>
        ):(
            this.state.trips.length && this.renderAllTripsTable(this.state.trips)
        );

        return(
            <div>
                <h1>All trips</h1>
                <p>
                    here you can see all trips
                </p>
                {content}
            </div>
        );
    }
}

const mapStateToProps =({trips}) => ({
    trips
});



export function TripsWithRouter(props){
    const navigate = useNavigate()
    const params = useParams()
    return(<Trips navigate={navigate} {...props} params={params}></Trips>)
}

//export default Trips;
//export default TripsWithRouter(Trips);


/// solve multiple export default is to add {...props} in order to have
/// both props from redux and navigate and params
export default connect(mapStateToProps,{getAllTrips})(TripsWithRouter);





   
