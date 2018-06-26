import React from 'react';
import PropTypes from 'prop-types';
import GroupContainer from './GroupContainer';
import Group from './Group';
import GroupHeader from './GroupHeader';
import GroupPanel from './GroupPanel';
import BuilderSidebar from './BuilderSidebar';
import {actions} from '../stores/GroupStore';
import {observer} from 'mobx-react';

class FormComponents extends React.Component{

  static propTypes = {
    random: PropTypes.string,
  };
  static defaultProps = {
    random : ''
  };

    render =() =>{
        return(
          <div className='col-xs-4 col-sm-3 col-md-2 formcomponents'>
          <BuilderSidebar id={"builder-sidebar-"+this.props.random}>
          {
           actions.getGroups().map((group , index)=>{
               return (
                   <GroupPanel key={index} type ={group.name} >
                     <GroupHeader id={"builder-sidebar-"+this.props.random} type={group.name} title={group.title} onOpenGroup={actions.changeClassName} />
                     <Group type={group.name} className={group.className}>
                          <GroupContainer type={group.name} />
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