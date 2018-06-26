import React from 'react';
import {observer} from 'mobx-react';
import FormComponents from '../components/FormComponents';
import DragContainer from '../components/drag/DragContainer';
import DragDropTip from '../components/drag/DragDropTip';
import RowContainer from '../components/container/RowContainer';
import Row from '../components/container/Row';
import Column from '../components/container/Column';


const random =Math.random().toString(36).substring(7).toString() ; 
class ApplicationBuilder extends React.Component{


      
    render =() =>{
        return(
        <RowContainer >
         <Row  rowClassName="row">
         <Column colClassName="col-sm-8" >
          <div className="well">  
            <div id="builder" className="builder-form row formbuilder">
               <FormComponents random={random} />
               <DragContainer  random={random}>
                   <DragDropTip  random={random} />
              </DragContainer>
          </div>
        </div>
        </Column> 
         <Column colClassName="col-sm-4" >
            <h3 className="text-center text-muted">Components JSON View</h3>
             <div className="well jsonviewer">
                <pre id="json"></pre>
            </div>
         </Column> 
        </Row>  
        </RowContainer>) ;
    };
}
export default observer(ApplicationBuilder);