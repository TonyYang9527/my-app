import React from 'react';


class BuilderSidebar extends React.Component{
       
    render =() =>{
        return(
          <div id={'builder-sidebar-'+Math.random().toString(36).substring(7)} className='accordion panel-group'>
            {this.props.children}
         </div>) ;
    };
}
export default BuilderSidebar;