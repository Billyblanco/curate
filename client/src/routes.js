import { Switch, Route } from 'react-router-dom'
import React from 'react'
import Cart from './components/Cart'
import Dashboard from './components/Dashboard'
import Landing from './components/Landing'
import Settings from './components/Settings'


export default (
  <Switch> 
      {/* <Route exact path='/' component={Landing} />  */}
      <Route path='/cart' component={Cart}/> 
      <Route path='/dashboard' component={Dashboard}/> 
      <Route path='/settings' component={Settings}/>
      
  </Switch> 
)