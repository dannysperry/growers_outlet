import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import routes from 'config/routes'

import Header from '../header'

const App = (props) => (
  <Router>
    <div className='App'>
      <Header />
      { props.ageVerified && props.ageVerified === true ?
          <div className="AgeGate">AGE GATE<div> :
          <div className='Routes'>
            <Switch>
              {routes.map((route, i) => (
                route.path === '/' ?
                  <Route exact path={route.path} component={route.component} key={i} /> :
                  <Route path={route.path} component={route.component} key={i} />
              ))}
            </Switch>
          </div>
      }
    </div>
  </Router>

)

export default App