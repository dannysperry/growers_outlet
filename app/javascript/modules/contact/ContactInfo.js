import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ContactInfo = props => {
  return (
    <ul className="ContactInfo">
      <li>
        <address>
          <i className="fa fa-map-marker"></i>
          {props.address}
        </address>
      </li>
      <li>
        <i className="fa fa-envelope-o"></i>
        Email: <Link to="/contact">{props.email}</Link>
      </li>
      <li>
        <i className="fa fa-phone"></i>
        Phone: <a href="tel:360-875-8189">{props.phone}</a>
      </li>
    </ul>
  )
}

ContactInfo.propTypes = {
  address: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired
}

export default ContactInfo