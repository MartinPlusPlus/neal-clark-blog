import React from 'react';

import { Link } from 'react-router-dom';

function NavItem(props) {
    return (
        <li className="nav-item p-3"><Link className="nav-link" to={props.location}>{props.name}</Link></li>
    )
}

export default NavItem;
