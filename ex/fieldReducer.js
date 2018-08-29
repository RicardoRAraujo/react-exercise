const INITIAL_STATE = { value: 'Opa' }

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case 'VALUE_CHANGED':
      return { value: state.payload }
    default:
     return state
  }
}