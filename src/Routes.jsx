import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ReadyOrdersView from './view/ReadyOrdersView';
import WaiterView from './view/waiterView';
import KitchenView from './view/KitchenView';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={WaiterView} />
    <Route exact path="/WaiterView" component={WaiterView} />
    <Route exact path="/KitchenView" component={KitchenView} />
    <Route exact path="/ReadyOrdersView" component={ReadyOrdersView} />
  </Switch>
);
export default Routes;
