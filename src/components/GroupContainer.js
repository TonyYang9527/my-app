import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import reactDragula from 'react-dragula';
import ReactDOM from 'react-dom';
import ComponentBuilder from './ComponentBuilder';

class GroupContainer extends React.Component{
    
    static propTypes = {
         type: PropTypes.string,
    };

    static defaultProps = {
        type : ''
     };

          
     componentDidMount=()=> {
        let  sidebarContainers = ReactDOM.findDOMNode(this);
        console.log("GroupContainer sidebarContainers:",sidebarContainers);
        reactDragula([sidebarContainers],{
            //  copy(element) {
            //     console.log("GroupContainer:  copy  element : ",element) ;
            //     return element.classList.contains('drag-copy');
            //   },
              accepts(element, target) {
                console.log("GroupContainer:  accepts  element : ",element) ;
                return !target.classList.contains('no-drop');
              }

        });
      };

    render =() =>{
        return(
          <div id={'group-container-'+this.props.type}  className='card-body panel-body no-drop'>
            {this.props.children}
            <ComponentBuilder title="1" /> 
            <ComponentBuilder title="2" /> 
            <ComponentBuilder title="3" />
         </div>) ;
    };
}
export default observer(GroupContainer);