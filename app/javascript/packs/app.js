/* eslint-env browser */
import React from 'react'
import { render } from 'react-dom'
import { CookiesProvider } from 'react-cookie'

import App from '../modules/layout'

import './main.scss'

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')

  render(
    <CookiesProvider>
      <App />
    </CookiesProvider>,
    node
  )
})