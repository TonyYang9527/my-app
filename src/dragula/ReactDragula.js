import reactDragula from 'react-dragula';
import DragulaContainers from './DragulaContainers';

export default class  ReactDragula {

    /**
   * init   Drag and Drop Element
   */

  static init =()=>{
    reactDragula(DragulaContainers.sidebarContainers.concat(DragulaContainers.dragContainers),{
        copy(element) {
           return element.classList.contains('drag-copy');
         },
         accepts(element, target) {
           return !target.classList.contains('no-drop');
         }
   }).on('drop', (element, target, source, sibling) => ReactDragula.onDrop(element, target, source, sibling));

  }
    
  /**
   * handle onDrop Event
   */
   static onDrop = (element, target, source, sibling) =>{
       //check target .
       if (!target) {
         return console.warn('Could not find target component.');
       }     
        console.log("onDrop sibling" ,sibling) ;
        //const builderElement = source.querySelector(`#${element.id}`);

        //Remove any instances of the placeholder.
        ReactDragula.removePlaceholder(target,sibling) ;

        // If the sibling is the placeholder, then set it to null.
    
    }  


    /**
   * Remove any instances of the placeholder
   */
  static removePlaceholder =(parentNode,sibling)=> {
    if(!parentNode){
        return console.warn('Could not find parentNodet.');
    }
    let placeholder = document.getElementById(`${parentNode.id}-placeholder`);
    if (placeholder) {
        parentNode.removeChild(placeholder);
    }
     // If the sibling is the placeholder, then set it to null.
     if (sibling === placeholder) {
         sibling = null;
      }
      console.log("onDrop parentNode" ,parentNode) ;
  };

}