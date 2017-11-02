/* eslint-env browser */
import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from 'config/routes'
import Header from '../header'
import Gate from '../gate'

import * as Cookies from 'js-cookie'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ageVerified: false,
      age: "18",
      errorMessage: ''
    }
    console.log(this.state.age)

    this.handleAgeSubmit = this.handleAgeSubmit.bind(this)
    this.handleAgeChange = this.handleAgeChange.bind(this)
  }

  handleAgeSubmit(event) {
    event.preventDefault()
    if (parseInt(this.state.age) >= 21) {
      Cookies.set('ageVerified', true)
      this.setState({
        ageVerified: true,
        errorMessage: ''
      })
    } else {
      Cookies.set('ageVerified', false)
      this.setState({
        ageVerified: false,
        errorMessage: 'You must be 21 or older to enter.'
      })
    }
  }

  handleAgeChange(event) {
    const target = event.target
    const value = target.value

    this.setState({
      age: value
    });
  }

  render() {
    let htmlBody = <Gate
                    age={parseInt(this.state.age)}
                    errorMessage={this.state.errorMessage}
                    handleChange={this.handleAgeChange}
                    handleSubmit={this.handleAgeSubmit} />
    if (this.state.ageVerified) {
      htmlBody = <div className='Routes'>
                    <Switch>
                      {routes.map((route, i) => (
                        route.path === '/' ?
                          <Route exact path={route.path} component={route.component} key={i} /> :
                          <Route path={route.path} component={route.component} key={i} />
                      ))}
                    </Switch>
                  </div>
    }
    return (
      <Router>
        <div className='App'>
          <Header />
          { htmlBody }
        </div>
      </Router>
    )
  }
}

export default App