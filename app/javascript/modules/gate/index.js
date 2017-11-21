/* eslint-env browser */
import React from 'react'
import PropTypes from 'prop-types'

const Gate = ({ handleSubmit }) => (
  <section className="Gate">
    <h2>Are you old enough?</h2>

    <div className="Gate__Buttons">
      <div className="Gate__Button">
        <button onClick={handleSubmit} className='btn' type='submit' value='ageVerified'>I am 21 or over</button>
      </div>
      <div className="Gate__Button">
        <button onClick={handleSubmit} className='btn' type='submit'>I am not 21 yet</button>
      </div>
    </div>
  </section>
)

Gate.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

export default Gate