import React from 'react';
import { Route, Switch } from 'react-router';
import { Home } from './pages/home/Home';
import { SignIn } from './pages/SignIn';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/signin' component={SignIn} />
        <Route path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
