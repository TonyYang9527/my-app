
export default class  DragulaContainers {

      static dragContainers = [];
      static sidebarContainers = [];

    static addDragContainers=(element) => {
           DragulaContainers.dragContainers.push(element) ;
    };
    static   getDragContainers=() => {
       return  DragulaContainers.dragContainers ;

    };

    static addSidebarContainers=(element) =>{
            DragulaContainers.sidebarContainers.push(element) ;
    };

    static getSidebarContainers=() => {
        return  DragulaContainers.sidebarContainers ;
    };
}