import React ,{Component}  from 'react' ;
import { Link ,} from  'react-router-dom' ;

class NavBar extends Component {

    //to-do
    constructor(props) {
        super(props);
    }

    render(){
        return(
       <ul>
           <li><Link to="/home">Home</Link></li>
           <li><Link to="/about">About</Link></li>
           <li><Link to="/list">List</Link></li>
           <li>source : {this.props.title}</li>
            </ul>);
    }


}

export default NavBar;