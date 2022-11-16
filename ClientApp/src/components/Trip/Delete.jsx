import react, {Component} from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";


class Delete extends Component{
    constructor(props){        
        super(props);
    
        this.onCancel = this.onCancel.bind(this);
        this.onConfirmation = this.onConfirmation.bind(this);

        this.state = {
            name:'',
            description:'',
            dateStarted:'',
            dateCompleted:''
        }
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

    onCancel(e)
    {
      // const {history} = this.props;
      // history.push('/trips');
      this.props.navigate('/trips');
    }

    onConfirmation(e){
       const {id} = this.props.params;
       ///const {history} = this.props;

       axios.delete("api/Trips/DeleteTrip/"+id).then(result => {
          // history.push("/trips");
           this.props.navigate("/trips");
       })
    }

    render() {
        return(
        <div style={{marginTop:10}}>
            <h2>Delete trip confirmation:</h2>
            <div className="card">
                <div className="card-body">
                   <h4 className="card-title">{this.state.name}</h4>
                   <p className='card-text'>{this.state.description}</p>
                   <button onClick={this.onCancel} className="btn btn-default">Cancel</button>
                   <button onClick={this.onConfirmation} className="btn btn-danger">Confirm</button>
                </div>
            </div>
        </div>)
    }
}

export function DeleteWithRouter(props){
    const navigate = useNavigate()
    const params = useParams()
    return(<Delete navigate={navigate} params={params}></Delete>)
}

export default Delete;