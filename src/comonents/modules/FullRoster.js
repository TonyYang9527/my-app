import React from 'react';
import {Link } from 'react-router-dom';
import DBAPI from './DBAPI';

class FullRoster extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        DBAPI.all().map(p => (
                            <li key={p.number}>
                                <Link to={`/roster/${p.number}`}>{p.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        );
    }


}
export default FullRoster;
