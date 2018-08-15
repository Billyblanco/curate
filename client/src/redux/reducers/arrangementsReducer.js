import axios from 'axios'

const FULFILLED = '_FULFILLED'
const ADD_FLOWERS_TO_ARRANGEMENT = 'ADD_FLOWERS_TO_ARRANGEMENT'
const GET_ARRANGEMENTS_FLOWERS = 'GET_ARRANGEMENTS_FLOWERS'
const CREATE_ARRANGEMENTS = 'CREATE_ARRANGEMENTS'
const ADD_VASE = 'ADD_VASE'

let initialState = {
  flowerIds: [],
  vaseId: null,
  arrangementsData: []
}

export default function reducer ( state = initialState, action) {
  switch (action.type) {
    case ADD_FLOWERS_TO_ARRANGEMENT: 
      // console.log(111111, action, 2222222222, state)
      return {...state, flowerIds: [...state.flowerIds, action.payload]}
    case ADD_VASE:
      return {...state, vaseId: action.payload}
    case CREATE_ARRANGEMENTS + FULFILLED:
      return {...state, arrangementsData: [ ...state.arrangementsData, action.payload], flowerIds: [], vaseId: null}
    case GET_ARRANGEMENTS_FLOWERS + FULFILLED:
      return {...state, arrangementsData: action.payload}
  default:
      return state
  }
}

export function addFlowersToArrangement (id) {
  return {
    type: ADD_FLOWERS_TO_ARRANGEMENT,
    payload: id
  }
}

export function addVase (id) {
  return {
    type: ADD_VASE,
    payload: id
  }
}

export function createArrangement (vaseId, flowerIds){
  let newArrangement = axios.post('/api/arrangements', {vaseId, flowerIds}).then(response => {
    return response.data
  })
  return {
    type: CREATE_ARRANGEMENTS,
    payload: newArrangement
  }
}

export function getArrangementsFlowers () {
  let arrangementsFlowers = axios.get('/api/arrangements/flowers').then(response => {
    return response.data
  })
  return {
    type: GET_ARRANGEMENTS_FLOWERS,
    payload: arrangementsFlowers
  }
}
