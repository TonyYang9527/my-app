import React from 'react';
import {observer} from 'mobx-react';
import FormComponents from '../components/FormComponents';
import DragContainer from '../components/drag/DragContainer';
import RowContainer from '../components/container/RowContainer';
import Row from '../components/container/Row';
import Column from '../components/container/Column';
import reactDragula from 'react-dragula';
import DragulaContainers from './DragulaContainers';


const random =Math.random().toString(36).substring(7).toString() ; 
class ApplicationBuilder extends React.Component{

    componentDidMount=()=> {
        reactDragula(DragulaContainers.sidebarContainers.concat(DragulaContainers.dragContainers),{
            copy(element) {
             // console.log("ApplicationBuilder  copy" , element) ;
               return element.classList.contains('drag-copy');
             },
             accepts(element, target) {
               // console.log("ApplicationBuilder  accepts" , element,target) ;
               return !target.classList.contains('no-drop');
             }
       }).on('drop', (element, target, source, sibling) => this.onDrop(element, target, source, sibling));
    };

    onDrop=(element, target, source, sibling) =>{
        
        console.log("onDrop element,target,source,sibling" ,element,target,source,sibling) ;

        const builderElement = source.querySelector(`#${element.id}`);
        const newParent = this.getParentElement(element);
       
        console.log("onDrop builderElement" ,builderElement) ;
        console.log("onDrop newParent" ,element.parentNode) ;

        if (!newParent || !newParent.component) {
          return console.warn('Could not find parent component.');
        }
    }

    getParentElement(element) {
        let containerComponent = element;
        do {
             console.warn(' containerComponent.parentNode', containerComponent.parentNode);
          containerComponent = containerComponent.parentNode;
        } while (containerComponent && !containerComponent.component);

        return containerComponent;
      }

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