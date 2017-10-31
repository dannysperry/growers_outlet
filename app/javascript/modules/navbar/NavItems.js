import React from 'react';
import { Link } from 'react-router-dom'

import { navRoutes } from 'config/routes'

const NavItems = () => (
  <ul className="NavItems nav navbar-nav navbar-right">
    {navRoutes.map(route => (
      <li key={route.key}>
        <Link to={route.path}>
          {route.key}
        </Link>
      </li>
    ))}
  </ul>
)

export default NavItems