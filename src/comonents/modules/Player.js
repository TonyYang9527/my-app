
import React from 'react';
import DBAPI from './DBAPI' ;
/********definde const ***************/
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
        </div>  
    ) ;
}

/********definde class ***************/
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
            </div>    
    );
}
}
*******/
export default Player;