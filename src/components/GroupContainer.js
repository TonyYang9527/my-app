import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import ReactDOM from 'react-dom';
import ComponentBuilder from '../components/ComponentBuilder';
import DragulaContainers from './DragulaContainers';

class GroupContainer extends React.Component{
    static propTypes = {
         type: PropTypes.string,
    };
    static defaultProps = {
        type : ''
     };
     componentDidMount=()=> {
         DragulaContainers.addSidebarContainers(ReactDOM.findDOMNode(this));
      };

    render =() =>{
        return(
          <div id={'group-container-'+this.props.type}  className='card-body panel-body no-drop'>
            <ComponentBuilder title="1" /> 
            <ComponentBuilder title="2" /> 
            <ComponentBuilder title="3" />
         </div>) ;
    };
}
export default observer(GroupContainer);