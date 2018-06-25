import React from 'react';
import {observer} from 'mobx-react';

class RowContainer extends React.Component{
    render =() =>{
        return(
            <div className="container-fluid" style={{marginTop: '60px' ,heigth :'100%'}}>
              {this.props.children}
            </div>
        ) ;
    };
}
export default observer(RowContainer);