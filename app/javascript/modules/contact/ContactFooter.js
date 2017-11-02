import React from 'react'

import { default as Map } from './ContactMap'
import { default as Info } from './ContactInfo'
import { default as Icons } from './SocialIcons'

const ContactFooter = () => {
  return(
    <div className="ContactFooter container">
      <div id="contact-box" className="row">
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <h2>Save our contact information</h2>
            <Info
              address="613 Montana Ave #2, South Bend, WA 98586"
              email="growersoutlet1@gmail.com"
              phone="(360) 875-8189" />

            <Icons />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="block">
            <h2>Google Us</h2>
            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactFooter


