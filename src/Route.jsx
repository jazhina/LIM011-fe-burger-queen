import React from 'react';
import { Switch, Route } from 'react-router-dom';
import WaiterView from './view/waiterView';
import KitchenView from './view/KitchenView';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={WaiterView} />
      <Route exact path="/WaiterView" component={WaiterView} />
      <Route exact path="/KitchenView" component={KitchenView} />
    </Switch>
  );
};
export default Routes;
