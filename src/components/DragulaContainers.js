

export default class   DragulaContainers {

      static dragContainers = [];
      static sidebarContainers = [];

    static addDragContainers=(element) => {
           console.log("DragulaContainers addDragContainers " ,element) ;
           DragulaContainers.dragContainers.push(element) ;

           console.log("DragulaContainers addDragContainers " ,DragulaContainers.getDragContainers()[0]) ;

    };
    static   getDragContainers=() => {
       return  DragulaContainers.dragContainers ;

    };

    static addSidebarContainers=(element) =>{
           //console.log("DragulaContainers addSidebarContainers " ,element) ;
            DragulaContainers.sidebarContainers.push(element) ;
    };

    static getSidebarContainers=() => {
        return  DragulaContainers.sidebarContainers ;
    };
}