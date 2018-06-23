import {observable, action,autorun,isObservableObject} from 'mobx';
import _ from  'lodash' ;
const state = observable({
     groups: [],
});
const actions = {
    loadGroups: action(() => {
        let  basic ={
             name : 'basic',
             title: 'Basic Components',
             weight: 0,
             className : 'panel-collapse collapse ' , 
        } ;
        let  advanced ={
            name : 'advanced',
            title: 'Advanced',
            weight: 0,
            className : 'panel-collapse collapse ' , 
       } ;
     state.groups.push(basic);
     state.groups.push(advanced);
    }),

    getGroups: action(() => {
        return state.groups;
       }),
       
    changeClassName: action((name) => {
        
        console.log("changeClassName :" ,Array.isArray(state.groups.slice()));
        if (state.groups instanceof Array){
          let element=_.find(state.groups, _.matchesProperty('name', name));
          console.log("changeClassName :" ,element);
          var exp = new RegExp('show');
          if(exp.test(element.className)){
             element.className ='panel-collapse collapse' ;
          }else{
             element.className ='panel-collapse collapse in show' ;
          }
        }
    }),

    getClassName: action((name) => {

        let element=_.find(state.groups, _.matchesProperty('name', name));
        console.log("getClassName :" ,element);
        console.log("isObservableObject :" ,isObservableObject(element));
        return element.className ;
    })
};

autorun(() => {
      if(_.size(state.groups)<=0){
          actions.loadGroups();
       }
});
export {actions};