import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'
import CreatePointSuccess from './pages/CreatePoint/success'

const Routes = () => {
  return  (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={CreatePoint} path="/create-point" exact/>
      <Route component={CreatePointSuccess} path="/point/:id" exact/>
    </BrowserRouter>
  )
}

export default Routes;