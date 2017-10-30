import React, { Component } from 'react';
import { Link } from 'react-router-dom' ;
class App extends Component {
  

  render() {
    return (
      <div>
        <nav >
          <div >
            <div >
               Scotch Cars
            </div>
            <div >
              <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/cars">Cars</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        
        <div>
          {/******this.props.children**/}
        </div>
      
      </div>
    );
  }

}

export default App;
