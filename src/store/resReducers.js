// import { FORM_SBM, FORM_UPD } from './formTypes'
import flat from '../data/flareFlat.json'
import { formSelectors } from '../store/formReducers'

const initialState = {
  roots: []
}

export default function formReducer(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    default:
      return state
  }
}

const roots = state => {
  const formData = formSelectors.formData(state)

  if (formData.search === undefined || formData.search === '') return []

  const txt = formData.search.toUpperCase()
  const hardSearch = txt.indexOf('*') === -1
  const s = !hardSearch ? txt.replace('*', '') : txt

  const result = flat.filter(
    o =>
      (hardSearch && o.name.toUpperCase() === s) ||
      (!hardSearch && o.name.toUpperCase().indexOf(s) !== -1)
  )
  return result
}

export const resSelectors = {
  roots
}
