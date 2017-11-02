/* eslint-env browser */
import React from 'react'
import PropTypes from 'prop-types'

const Gate = ({errorMessage, age, handleChange, handleSubmit }) => {
  let errorMessageNode = <span></span>
  if (errorMessage) {
    errorMessageNode = <span className="error">{ errorMessage }</span>
  }
  return (
    <section className="Gate">
      { errorMessageNode }
      <form name='agegate' onSubmit={handleSubmit} >
        <h2>Are you old enough?</h2>
        <input
          type="number"
          placeholder="18"
          min="1"
          max="140"
          name="age"
          value={parseInt(age)}
          onChange={handleChange}
        />

        <div className="agegate--item">
          <button type='submit'>Enter</button>
        </div>
      </form>
    </section>
  )
}

Gate.propTypes = {
  errorMessage: PropTypes.string,
  age: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default Gate