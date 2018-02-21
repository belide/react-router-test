import React from 'react';
import {Switch, Route} from 'react-router-dom';
// Component
import NavLink from './NavLink';
import Home from './Home';
import About from './About';


const Routes = () => {
  return (
    <div>
      <NavLink />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Routes;