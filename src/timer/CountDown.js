import React from 'react';
import {observer} from 'mobx-react';
import {observable, action,autorun} from 'mobx';

 


const state = observable({
     date: '',
     days: 0,
     hours: 0,
     min: 0,
     sec: 0,
});

const actions = {
    init: action((date) => {
        state.date =date;
        console.log("init")
    }),

     cal: action(() => {

    }),
     

};

const CountdownTimer = observer((props) => {
    actions.init(props.date);
    return (
        <div>
           <p></p> <span>{state.date}</span>
           <p>DD</p> <span>{state.days}</span>
           <p>HH</p> <span>{state.hours}</span>
           <p>MM</p> <span>{state.min}</span>
           <p>SEC</p> <span>{state.sec}</span>
        </div>
    );
});
export default CountdownTimer;