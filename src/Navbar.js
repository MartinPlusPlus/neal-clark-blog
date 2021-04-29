import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import NavItem from './NavItem';
import Home from './Home';
import Documents from './Documents';
import Email from './Email';

function Navbar() {
    return (
        <Router>
            <div>
                <nav className="navbar-nav d-flex flex-row justify-content-center">
                    <NavItem location="/" name="Home"/>
                    <NavItem location="/docs" name="Documents"/>
                    <NavItem location="/mail" name="E-Mail"/>
                </nav>

                <Route exact path="/docs" component={Documents}/>
                <Route exact path="/mail" component={Email}/>
                <Route exact path="/" component={Home}/>
            </div>
        </Router>
    )
}

export default Navbar;
