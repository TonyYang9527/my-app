import React from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';
import dragula from 'react-dragula';
import FormComponents from '../components/FormComponents';
import DragContainer from '../components/drag/DragContainer';
import DragDropTip from '../components/drag/DragDropTip';
import RowContainer from '../components/container/RowContainer';
import Row from '../components/container/Row';
import Column from '../components/container/Column';


const random =Math.random().toString(36).substring(7).toString() ; 
class ApplicationBuilder extends React.Component{

    componentDidMount=()=> {
        console.log("FormComponents componentDidMount:",this.refs.GroupContainer);
        console.log("FormComponents DragContainer:",this.refs.DragContainer);
    
        let  sidebarContainers = ReactDOM.findDOMNode(this.refs.GroupContainer);
        let  dragContainers = ReactDOM.findDOMNode(this.refs.DragContainer);
        
        this.dragula = dragula([sidebarContainers]);
      };

      
    render =() =>{
        return(
        <RowContainer >
         <Row  rowClassName="row">
         <Column colClassName="col-sm-8" >
          <div className="well">  
            <div id="builder" className="builder-form row formbuilder">
               <FormComponents random={random} />
               <DragContainer  random={random}  ref="DragContainer">
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