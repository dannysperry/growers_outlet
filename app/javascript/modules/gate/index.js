import React from 'react'
import AgeGate from 'agegate'

const Gate = () => (
  <form name='agegate'>
    <input type='number' name='year' />
    <input type='number' name='month' />
    <input type='number' name='day' />

    <input type='checkbox' name='remember' checked />

    <button type='submit'>Enter</button>
  </form>
)

let options = {
  age: 21,
  form: Gate,
  cookieExpiry: Infinity,
  cookieName: 'ageVerified'
}

let gate = new AgeGate(options, (err) => {
  if (err) throw new Error('You shall not pass')
})

export default gate