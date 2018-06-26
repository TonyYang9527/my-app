import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
import reactDragula from 'react-dragula';
class DragContainer extends React.Component{
    
    static propTypes = {
        random: PropTypes.string,
    };

    static defaultProps = {
        random : ''
     };
     
     componentDidMount=()=> {
        let  dragContainer = ReactDOM.findDOMNode(this);
        console.log("DragContainer dragContainer:",dragContainer);
        reactDragula([dragContainer],{
            // copy(element) {
            //     console.log("DragContainer:  copy  element : ",element) ;
            //     return element.classList.contains('drag-copy');
            //   },
            //   accepts(element, target) {
            //     console.log("DragContainer:  accepts  element : ",element) ;
            //     return !target.classList.contains('no-drop');
            //   }

        });
      };


    render =() =>{
        return(
          <div id={'builder-element-'+this.props.random} className="col-xs-8 col-sm-9 col-md-10 formarea drag-container" style={{visibility : 'visible',position :'relative'}}> 
          {this.props.children}
         </div>) ;
    };
}
export default observer(DragContainer);