import React from 'react';
import { observer, inject } from 'mobx-react' ;

@observer 
class IM extends React.Component {
    render() {
        let socket =this.props.socket;
        return (
    <div>
         <div>
        <button  onClick={socket.connect} >Connect</button>
        <button   >ConnectAny</button>
        <button  >Disconnect</button>
     </div>
    <div id="conversationDiv">
        <label>What is your name?</label><input type="text" id="name" />
        <button id="sendName" >Send</button>
        <p id="response"></p>
    </div>
</div>
        );
    }
}
export default IM;