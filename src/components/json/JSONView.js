import React from 'react';
import PropTypes from 'prop-types';
import GroupContainer from './GroupContainer';
import Group from './Group';
import GroupHeader from './GroupHeader';
import GroupPanel from './GroupPanel';
import BuilderSidebar from './BuilderSidebar';
import {actions} from '../stores/GroupStore';
import {observer} from 'mobx-react';

class JSONView extends React.Component{

  static propTypes = {
    random: PropTypes.string,
  };
  static defaultProps = {
    random : ''
  };

    render =() =>{
        return(
        <div>
          <h3 className="text-center text-muted">JSON View</h3>
          <div className="well jsonviewer">
            <pre id="json"></pre>
         </div>
         </div>) ;
    };
}
export default observer(JSONView);