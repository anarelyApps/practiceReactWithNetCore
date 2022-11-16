import react, {Component} from 'react';
import axios from 'axios';


export class Create extends Component {

    constructor(props){
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDateStarted = this.onChangeDateStarted.bind(this);
        this.onChangeDateCompleted = this.onChangeDateCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
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

        const {history} = this.props;

        let tripObj = {
            Id: Math.floor(Math.random()*1000),
            name: this.state.name,
            description: this.state.description,
            dateStarted: this.state.dateStarted,
            dateCompleted: this.state.dateCompleted
        }

        axios.post("api/Trips/AddTrip",tripObj).then(result=>{
           // history.push('/');
            
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
                        <input type="submit" value="Add Trip" className='btn btn-primary' />
                    </div>
                </form>
            </div>
        )
    }
}