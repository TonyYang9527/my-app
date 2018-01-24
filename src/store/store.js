import { observable,  computed, autorun, action } from "mobx";
import data from './data.js';

class Store {
    @observable todoData = data ;
    @observable defaultVal = 'abc' ;
    @observable checked = true ;
    
    welcome = () => {
        autorun(() => {
            if (this.defaultVal === 'welcome') {
                console.log('welcome....');
                console.log('fetch  weather_mini  information ....');
                let url = 'http://wthrcdn.etouch.cn/weather_mini?citykey=101010100' ;
                let req = new Request(url, { method: 'GET', cache: 'reload' });
                fetch(req).then(function (response) {
                    return response.json();
                }).then(function (json) {
                    console.log('json status :' + JSON.stringify(json.status));
                    console.log('json desc:' + JSON.stringify(json.desc));
                    console.log('json data:' + JSON.stringify(json.data));
                    console.log('json city:' + JSON.stringify(json.data.city));
                });
            }

        })
    }

    @computed get getInputLength() {
        return this.defaultVal.length ;
    }
    @computed get getListData() {
        if (this.checked) {
            return this.todoData ;
        } else {
            let val = [] ;
            this.todoData.forEach(el => {
                if (el.status) {
                    val.push(el) ;
                }
            })
            return val ;
        }
    }
    @computed get setLeftStyle() {
        if (this.checked) {
            return {background: 'rgba(150, 150, 150, 0.5)' }
        } else {
            return { }
        }
    }
    @computed get setRightStyle() {
        if (!this.checked) {
            return {  background: 'rgba(150, 150, 150, 0.5)' }
        } else {
            return { }
        }
    }

    @action.bound handlerChange(event) {
        this.defaultVal = event.target.value
    }
    @action.bound addTodo(event) {
        // ! param  :  is null  or undefined  or empty.
        if (event.target.value && event.keyCode === 13) {
            event.t
            let add = { time: '17-11-11', data: event.target.value, status: true };
            this.todoData.push(add);
            this.defaultVal = ''
        }else{ 
            return false
        }
    }

    @action.bound handerToggleLeft() {
        this.checked = true
    }
    @action.bound handerToggleRight() {
        this.checked = false
    }
}

let store = new Store()
store.welcome.call(store)
export default store 