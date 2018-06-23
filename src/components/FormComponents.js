import React from 'react';
import ComponentBuilder from './ComponentBuilder';
import GroupContainer from './GroupContainer';
import Group from './Group';
import GroupHeader from './GroupHeader';
import GroupPanel from './GroupPanel';
import BuilderSidebar from './BuilderSidebar';
import {actions} from '../stores/GroupStore';
import {observer} from 'mobx-react';

const id ='builder-sidebar-'+Math.random().toString(36).substring(7) ; 

class FormComponents extends React.Component{
  
    render =() =>{
        return(
          <div className='col-xs-4 col-sm-3 col-md-2 formcomponents'>
          <BuilderSidebar id={id}>
          {
           actions.getGroups().map((group , index)=>{
               return (
                   <GroupPanel key={index} type ={group.name} >
                     <GroupHeader id={id} type={group.name} title={group.title} onOpenGroup={actions.changeClassName} />
                     <Group type={group.name} className={group.className}>
                      <GroupContainer type={group.name}>
                        <ComponentBuilder  />
                      </GroupContainer>
                     </Group>
                     
                  </GroupPanel>
               ) ;
            })   
          }
           </BuilderSidebar>
         </div>) ;
    };
}
export default observer(FormComponents);