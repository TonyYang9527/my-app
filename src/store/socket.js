import { observable,  computed, autorun, action } from "mobx";
import SockJS from "sockjs-client";
import Stomp from "stompjs";

class Socket {

    @action.bound connect(event) {
        let socket = new SockJS("http://localhost:8080/connect");
        let  stompClient = Stomp.over(socket);
        stompClient.connect({}, function(frame){
            stompClient.setConnected =true ;
            console.log('Connected: ' +  JSON.stringify(frame) );
            stompClient.subscribe('/topic/greetings', function(greeting){
                showGreeting(JSON.parse(greeting.body).content);
            });
        });
    }
}

let socket = new Socket() ;
export default socket 