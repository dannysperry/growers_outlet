import React, { Component } from 'react'

import ContactFooter from '../contact/ContactFooter'

const GREENBITS_API_KEY='gJ1iLEPD5CNKHQMs3BNHYA'
const GREENBITS_MENU_ID='0049dd84-555d-448d-8929-70ff15e75d77'

const TITLE="Grower's Outlet Menu"

class Menu extends Component {
  render() {
    return(
      <div className='Menu'>
        <inventory-list
          menu-id={GREENBITS_MENU_ID}
          menu-api-key={GREENBITS_API_KEY}
          default-item
          default-group-header>
            <div className='MenuList'>
              <yield to='header'>
                <h1>{TITLE}</h1>
              </yield>
            </div>
        </inventory-list>
        <ContactFooter />
      </div>
    )
  }
}

export default Menu