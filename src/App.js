import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/home';
import Rooms from './pages/rooms';
import SignleRoom from './pages/singleRoom';
import Error from './pages/error';

import './App.css';

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rooms' component={Rooms} />
        <Route exact path='/rooms/:slug' component={SignleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
