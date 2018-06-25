import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';


class Column extends React.Component{

    static propTypes = {
        colClassName: PropTypes.string,
    };

   static defaultProps = {
        colClassName : ''
    };

    render =() =>{
        return(
            <div className={this.props.colClassName}>
                {this.props.children}
            </div>
        ) ;
    };
}
export default observer(Column);