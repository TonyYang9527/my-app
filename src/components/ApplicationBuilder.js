import React from 'react';
import {observer} from 'mobx-react';
import FormComponents from '../components/FormComponents';
import DragContainer from '../components/drag/DragContainer';
import RowContainer from '../components/container/RowContainer';
import Row from '../components/container/Row';
import Column from '../components/container/Column';
import ReactDragula from '../dragula/ReactDragula';

const random =Math.random().toString(36).substring(7).toString() ; 
class ApplicationBuilder extends React.Component{

    componentDidMount=()=> {
          ReactDragula.init();  
    };

    render =() =>{
        return(
        <RowContainer >
          <Row  rowClassName="row">
            <Column colClassName="col-sm-8" >
                <div className="well">  
                 <div id="builder" className="builder-form row formbuilder">
                     <FormComponents random={random} />
                     <DragContainer  random={random} />
                 </div>
                </div>
            </Column> 
          </Row>  
        </RowContainer>) ;
    };
}
export default observer(ApplicationBuilder);