import axios from 'axios'

const FULFILLED = '_FULFILLED'
const GET_FLOWERS = 'GET_FLOWERS'

let initialState = {
  flowerData: []
}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_FLOWERS + FULFILLED:
      return {...state, flowerData: action.payload}
    default:
      return state
  }
}

export function getFlowers () {
  let flowers = axios.get('/api/flowers').then(response => {
    return response.data
  })
  return {
    type: GET_FLOWERS,
    payload: flowers
  }
}