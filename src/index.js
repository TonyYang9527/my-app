import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import FormMaker from '../src/builder/FormMaker';
//import ComponentFactory from '../src/builder/ComponentFactory';
import ComponentBuilder from '../src/components/ComponentBuilder';
import GroupContainer from '../src/components/GroupContainer';
import Group from '../src/components/Group';
import GroupHeader from '../src/components/GroupHeader';
import GroupPanel from '../src/components/GroupPanel';
import BuilderSidebar from '../src/components/BuilderSidebar';
import FormComponents from '../src/components/FormComponents';
import {actions}from '../src/stores/GroupStore';

const id ='builder-sidebar-'+Math.random().toString(36).substring(7) ; 
ReactDOM.render(
<FormComponents>
<BuilderSidebar id={id}>
   {
    actions.getGroups().map((group , index)=>{
        return (
            <GroupPanel key={index} type ={group.name} >
              <GroupHeader id={id} type={group.name} title={group.name} onOpenGroup={actions.changeClassName} />
              <Group type={group.name} className={actions.getClassName(group.name)}>
               <GroupContainer type={group.name}>
                 <ComponentBuilder  />
               </GroupContainer>
              </Group>
           </GroupPanel>
        ) ;
     })   
   }
    </BuilderSidebar>
    </FormComponents>
    , document.getElementById('builder'));
//ReactDOM.render(<FormMaker form={{display: 'form'}}  options={{base: 'https://examples.form.io'} } />, document.getElementById('root'));
