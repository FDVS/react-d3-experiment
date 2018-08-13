// Types and Actions
import { FORM_SBM, FORM_UPD } from './formTypes'

//Helpers
const makeActionCreator = (type, ...argNames) => {
  return function(...args) {
    let action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

//Actions that alter the store via reducer
export default {
  formSbm: makeActionCreator(FORM_SBM, 'formData'),
  formUpd: makeActionCreator(FORM_UPD, 'name', 'value')
}
