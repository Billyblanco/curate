const ADD_DECOR = 'ADD_DECOR'

let initialState = {
  decorIds: []
}

export default function reducer ( state = initialState, action) {
  switch (action.type) {
    case ADD_DECOR: 
      return {...state, decorIds: [...state.decorIds, action.payload]}
    default:
      return state
  }
}
export function addDecor (id) {
  return {
    type: ADD_DECOR,
    payload: id
  }
}