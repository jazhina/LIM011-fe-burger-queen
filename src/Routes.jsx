import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WaiterView from './components/waiterView';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WaiterView} />
    </Switch>
  );
};
export default Routes;
