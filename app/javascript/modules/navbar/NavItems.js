import React from 'react';
import { Link } from 'react-router-dom'

import routes, { navRoutes } from '../../config/routes'
import Logo from './Logo'

import styles from 'stylesheets/navbar/_NavItems'

const NavItems = (props) => (
  <ul className={styles.root}>
    <li>
      <Logo>
        {props.logo}
      </Logo>
    </li>
    {navRoutes.map((route, i) => (
      <li key={i}>
        <Link to={route.path}>
          {route.component.name}
        </Link>
      </li>
    ))}
  </ul>
)

export default NavItems