import React from  'react' ;
import { Route, Switch } from 'react-router-dom' ;
import Home from '../home/Home' ;
import Roster from  '../modules/Roster';
import Schedule from '../modules/Schedule' ;
class Main extends React.Component{

render(){
  return(
    <main>
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/roster' component={Roster} />
        <Route path='/schedule' component={Schedule} />
    </Switch>
    </main>
  );
}

}
export default Main;