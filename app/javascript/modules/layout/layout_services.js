/* eslint-env browser */
const cookieWillExpireDateFromToday = (days) => {
  const tmpDate = new Date()
  tmpDate.setDate(tmpDate.getDate() + days)
}


const updateAgeVerification = (val) => {
  const expiry = val ? 365 : 1
  return cookieWillExpireDateFromToday(expiry)
}


export {
  updateAgeVerification
}