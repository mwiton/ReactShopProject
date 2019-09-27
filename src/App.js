import React from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import HomePage from './pages/homepage/homepage.component'
import Shop from './components/shop/shop.component'

function App() {
  return (
    <div>
        <Switch>
            <Route path='/' component={HomePage} exact/>
            <Route path='/shop/:category_name' component={Shop} exact/>
        </Switch>
    </div>
  );
}

export default App;
