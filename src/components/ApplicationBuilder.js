import React from 'react';
import {observer} from 'mobx-react';
import ReactDOM from 'react-dom';
import FormComponents from '../components/FormComponents';
import DragContainer from '../components/drag/DragContainer';
import DragDropTip from '../components/drag/DragDropTip';
import RowContainer from '../components/container/RowContainer';
import Row from '../components/container/Row';
import Column from '../components/container/Column';
import reactDragula from 'react-dragula';
import DragulaContainers from './DragulaContainers';
import GroupContainer from './GroupContainer';
const random =Math.random().toString(36).substring(7).toString() ; 
class ApplicationBuilder extends React.Component{
    
    componentDidMount=()=> {
        reactDragula(DragulaContainers.sidebarContainers.concat(DragulaContainers.dragContainers),{
            copy(element) {
              console.log("ApplicationBuilder  copy" , element) ;
               return element.classList.contains('drag-copy');
             },
             accepts(element, target) {
                console.log("ApplicationBuilder  accepts" , element,target) ;
               return !target.classList.contains('no-drop');
             }
       }).on('drop', (element, target, source, sibling) => this.onDrop(element, target, source, sibling));
    };

    onDrop=(element, target, source, sibling) =>{
        console.log("onDrop element " ,element) ;
        console.log("onDrop target" ,target) ;
        console.log("onDrop source" ,source) ;
        console.log("onDrop sibling" ,sibling) ;
    }
    
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