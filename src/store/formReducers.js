import { FORM_SBM, FORM_UPD } from './formTypes'

const initialState = {
  search: '',
  depth: 1,
  formData: {},
  loading: false
}

export default function formReducer(state = initialState, action) {
  let newState = Object.assign({}, state)
  switch (action.type) {
    // Form was submitted
    case FORM_SBM:
      newState.loading = true
      newState.formData = action.formData
      return newState
    // User is happily filling out the form
    case FORM_UPD:
      newState[action.name] =
        // Booleans were being set as undefined, so I had to use !oldValue
        typeof state[action.name] === 'boolean'
          ? !state[action.name]
          : action.value
      return newState
    default:
      return state
  }
}

const search = state => state.formReducer.search
const depth = state => state.formReducer.depth
const formData = state => state.formReducer.formData
const loading = state => state.formReducer.loading

export const formSelectors = {
  search,
  depth,
  formData,
  loading
}
