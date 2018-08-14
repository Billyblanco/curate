import axios from 'axios'

const FULFILLED = '_FULFILLED'
const GET_DECOR = 'GET_DECOR'

let initialState = {
  decorData: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_DECOR + FULFILLED:
      return {...state, decorData: action.payload}
    default:
      return state
  }
}

export function getDecor () {
  let decor = axios.get('/api/decor').then(response => {
    return response.data
  })
  return {
    type: GET_DECOR,
    payload: decor
  }
}