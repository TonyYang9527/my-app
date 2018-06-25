import React from 'react';
import {observer} from 'mobx-react';
import FormComponents from '../components/FormComponents';
import DragContainer from '../components/drag/DragContainer';
import DragDropTip from '../components/drag/DragDropTip';

const random =Math.random().toString(36).substring(7).toString() ; 
class ApplicationBuilder extends React.Component{
    render =() =>{
        return(
        <div className="well">  
          <div id="builder" className="builder-form row formbuilder">

          </div>
        </div>) ;
    };
}
export default observer(ApplicationBuilder);