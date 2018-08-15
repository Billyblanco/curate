import axios from 'axios'

const FULFILLED = '_FULFILLED'
const GET_FLOWERS = 'GET_FLOWERS'
const GET_VASES = 'GET_VASES'
const GET_DECOR = 'GET_DECOR'


let initialState = {
  flowerData: [],
  vasesData: [],
  decorData: [],

}

export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_FLOWERS + FULFILLED:
      return {...state, flowerData: action.payload}

    case GET_VASES + FULFILLED:
      return {...state, vasesData: action.payload}

    case GET_DECOR + FULFILLED:
      return {...state, decorData: action.payload}

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

export function getVases () {
  let vases = axios.get('/api/vases').then(response => {
  return response.data
})
  return {
    type: GET_VASES,
    payload: vases
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

