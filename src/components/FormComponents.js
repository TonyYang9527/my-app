import React from 'react';


class FormComponents extends React.Component{
       
    render =() =>{
        return(
          <div className='col-xs-4 col-sm-3 col-md-2 formcomponents'>
            {this.props.children}
         </div>) ;
    };
}
export default FormComponents;