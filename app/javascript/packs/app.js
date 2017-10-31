/* eslint-env browser */
import React from 'react'
import { render } from 'react-dom'
import App from '../modules/layout'

import './main.scss';

import * as Cookies from "js-cookie";

document.addEventListener('DOMContentLoaded', () => {
  const node = document.getElementById('root')

  const ageVerified = Cookies.get('ageVerified')

  render(<App ageVerified={ageVerified} />, node)
})