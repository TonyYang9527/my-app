import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

class DragContainer extends React.Component{
    
    static propTypes = {
        random: PropTypes.string,
    };

    static defaultProps = {
        random : ''
     };
     
    render =() =>{
        return(
          <div id={'builder-element-'+this.props.random} className="col-xs-8 col-sm-9 col-md-10 formarea drag-container" style={{visibility : 'visible',position :'relative'}}> 
          {this.props.children}
         </div>) ;
    };
}
export default observer(DragContainer);