import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

class Row extends React.Component{

    static propTypes = {
        rowClassName: PropTypes.string,
    };

   static defaultProps = {
         rowClassName : ''
    };

    render =() =>{
        return(
            <div className= {this.props.rowClassName}>
               {this.props.children}
            </div>
        ) ;
    };
}
export default observer(Row);