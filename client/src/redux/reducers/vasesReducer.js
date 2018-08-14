import axios from 'axios'

const FULFILLED = '_FULFILLED'
const GET_VASES = 'GET_VASES'

let initialState = {
  vasesData: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_VASES + FULFILLED:
      return {...state, vasesData: action.payload}
    default: 
      return state
  }
}

export function getVases () {
  let vases = axios.get('/api/vases').then(response => {
  return response.data
})
  return {
    type: GET_VASES,
    payload: vases
  }
}