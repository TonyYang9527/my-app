import {observable, action,autorun} from 'mobx';
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
            weight: 10,
            className : 'panel-collapse collapse ' , 
       } ;
       let   layout= {
        name : 'layout',
        title: 'Layout',
        weight: 20,
        className : 'panel-collapse collapse ' , 
      };
      let data = {
        name : 'data',
        title: 'Data',
        weight: 20,
        className : 'panel-collapse collapse ' , 
      }

     state.groups.push(basic);
     state.groups.push(advanced);
     state.groups.push(layout);
     state.groups.push(data);
    }),

    getGroups: action(() => {
        return state.groups;
       }),
       
    changeClassName: action((name) => {
        
        if (state.groups instanceof Array){
          let element=_.find(state.groups, _.matchesProperty('name', name));
         // console.log("changeClassName :" ,element);
          var exp = new RegExp('show');
          if(exp.test(element.className)){
             element.className ='panel-collapse collapse' ;
          }else{
             element.className ='panel-collapse collapse in show' ;
          }
        }
    })
};

autorun(() => {
      if(_.size(state.groups)<=0){
          actions.loadGroups();
       }
});
export {actions};