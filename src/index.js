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

ReactDOM.render(
<BuilderSidebar>
    <GroupPanel>
       <GroupHeader>Basic</GroupHeader>
       <Group>
         <GroupContainer>
            <ComponentBuilder />
            <ComponentBuilder />
            <ComponentBuilder />
         </GroupContainer>
     </Group>
    </GroupPanel>
    <GroupPanel>
       <GroupHeader>Advanced</GroupHeader>
       <Group>
         <GroupContainer>
            <ComponentBuilder />
            <ComponentBuilder />
            <ComponentBuilder />
         </GroupContainer>
     </Group>
    </GroupPanel>
    <GroupPanel>
       <GroupHeader>Layout</GroupHeader>
       <Group>
         <GroupContainer>
            <ComponentBuilder />
            <ComponentBuilder />
            <ComponentBuilder />
         </GroupContainer>
     </Group>
    </GroupPanel>
    </BuilderSidebar>
    , document.getElementById('builder'));
//ReactDOM.render(<FormMaker form={{display: 'form'}}  options={{base: 'https://examples.form.io'} } />, document.getElementById('root'));
