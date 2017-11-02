
import React from 'react';
import { Link } from 'react-router-dom';
import DBAPI from './DBAPI' ;
/********definde by const ***************/
const Player = (props) => {
    const player = DBAPI.get(
        parseInt(props.match.params.number, 10)
    )
    if (!player) {
        return <div>Sorry, but the player was not found</div>
    }
    return (
        <div>
            <h1>{player.name} (#{player.number})</h1>
            <h2>{player.position}</h2>
            <Link to='/roster'>Back</Link>
        </div>  
    ) ;
}

/********definde by  class ***************/
/************
class Player extends React.Component{

render(){
    const player = DBAPI.get(
        parseInt(this.props.match.params.number, 10)
    )
    return(
   !player?<div>Sorry, but the player was not found</div> : 
            <div>
                <h1>{player.name} (#{player.number})</h1>
                <h2>{player.position}</h2>
                <Link to='/roster'>Back</Link>
            </div>    
    );
}
}
*******/
export default Player;