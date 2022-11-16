import react, {Component} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

class Update extends Component
{
         
    constructor(props){
        
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);

        this.state = {
            name:'',
            description:'',
            dateStarted:'',
            dateCompleted:''
        }
    }

    onChangeName(e){
        this.setState({name : e.target.value});
    }
    onChangeDescription(e){
        this.setState({description : e.target.value});
    }
    onChangeDateStarted(e){
        this.setState({dateStarted : e.target.value});
    }
    onChangeDateCompleted(e){
        this.setState({dateCompleted : e.target.value});
    }

    onSubmit(e){
        e.preventDefault();

       //  const {history} = this.props;
       // const {id} = this.props.match.params;
       const {id} = this.props.params;

        let tripObj = {
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        }

        axios.put("api/Trips/UpdateTrip/"+id,tripObj).then(result=>{
           // history.push('/Trips');
            this.props.navigate('/Trips');
        })
    }

    onUpdateCancel(e)
    {
      // const {history} = this.props;
       this.props.navigate('/trips');
    }


    componentDidMount(){
        const {id} = this.props.params;

        axios.get("api/Trips/SingleTrip/"+id).then(result=>{
            const response = result.data;

            this.setState({name:response.name,
                           description:response.description,
                           dateStarted:new Date(response.dateStarted).toISOString().slice(0,10),
                           dateCompleted:response.dateCompleted? new Date(response.dateCompleted).toISOString().slice(0,10):''
                           });
          })
    }



    render(){
        return(
            <div className='trip-form'>
                <h3>Add new Trip</h3>
                <form onSubmit={this.onSubmit} >
                    <div className='form-group'>
                        <label>Trip name:</label>
                        <input type="text" value={this.state.name} onChange={this.onChangeName} className='form-control' />
                    </div>
                    <div className='form-group'>
                        <label>Trip description:</label>
                        <input type="text"  value={this.state.description} onChange={this.onChangeDescription} className='form-control' />
                    </div>
                    <div className='row'>
                    <div className='col col-md-6 col-sm-6 col-xs-12'>
                       <div className='form-group'>
                        <label>Trip date Started:</label>
                        <input type="date" value={this.state.dateStarted} onChange={this.onChangeDateStarted} className='form-control' />
                       </div>
                    </div>
                    <div className='col col-md-6 col-sm-6 col-xs-12'>
                      <div className='form-group'>
                        <label>Trip date Completed:</label>
                        <input type="date" value={this.state.dateCompleted} onChange={this.onChangeDateCompleted} className='form-control'/>
                      </div>
                    </div>
                    </div>

                    <div className='form-group'>
                      
                        <button onClick={this.onUpdateCancel} className="btn btn-success">cancel</button>
                        <button onClick={this.onSubmit} type="submit" value="Update trip" className='btn btn-primary'>Update</button>
                    </div>
                </form>
            </div>
        )
    }
}

export function UpdateWithRouter(props){
    const navigate = useNavigate()
    const params = useParams()
    return(<Update navigate={navigate} params={params}></Update>)
}

export default Update;
