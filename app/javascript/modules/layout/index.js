/* eslint-env browser */
import React, { Component } from 'react'
import { instanceOf } from 'prop-types'
import { withCookies, Cookies } from 'react-cookie'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import routes from 'config/routes'
import Header from '../header'
import Gate from '../gate'
import { updateAgeVerification } from './layout_services'



class App extends Component {
  constructor(props) {
    super(props);

    const cookies = props.cookies

    this.state = {
      ageVerified: cookies.get('ageVerified') || 'false'
    }

    this.updateAgeVerification = updateAgeVerification.bind(this)
    this.handleAgeSubmit = this.handleAgeSubmit.bind(this)
  }

  handleAgeSubmit(event) {
    const { cookies } = this.props
    const target = event.target
    const value = target.value
    const result = value === 'ageVerified'

    cookies.set('ageVerified', result, { expires: this.updateAgeVerification(result) })
    if (!result) return location.href = "https://lcb.wa.gov/mj2015/faqs_i-502"
    this.setState({
      ageVerified: cookies.get('ageVerified')
    })
  }

  render() {

    const { ageVerified } = this.state
    const rendered = (ageVerified === true.toString())
      ? this.renderWeb()
      : this.renderGate() // must use double equals for non type checking comparison

    return (
      <Router>
        <div className='App'>
          { rendered }
        </div>
      </Router>
    )
  }

  renderGate() {
    return (
      <Gate
        key='agegate'
        handleSubmit={this.handleAgeSubmit} />
    )
  }

  renderWeb() {
    return (
      [
        <Header key='header' />,
        <div className='Routes' key='routes'>
          <Switch>
            {routes.map((route, i) => (
              route.path === '/' ?
                <Route exact path={route.path} component={route.component} key={`route_${i}`} /> :
                <Route path={route.path} component={route.component} key={`route_${i}`} />
            ))}
          </Switch>
        </div>
      ]
    )
  }
}

App.propTypes = {
  cookies: instanceOf(Cookies).isRequired
}

export default withCookies(App)