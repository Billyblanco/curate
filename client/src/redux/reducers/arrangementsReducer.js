import axios from 'axios'

const FULFILLED = '_FULFILLED'
const ADD_FLOWERS_TO_ARRANGEMENT = 'ADD_FLOWERS_TO_ARRANGEMENT'
const GET_ARRANGEMENTS_FLOWERS = 'GET_ARRANGEMENTS_FLOWERS'
const CREATE_ARRANGEMENTS = 'CREATE_ARRANGEMENTS'
const ADD_VASE = 'ADD_VASE'
const DELETE_ARRANGEMENT = 'DELETE_ARRANGEMENT'

let initialState = {
  flowerIds: [],
  vaseId: null,
  arrangementsData: []
}

export default function reducer ( state = initialState, action) {
  switch (action.type) {
    case ADD_FLOWERS_TO_ARRANGEMENT: 
      return {...state, flowerIds: [...state.flowerIds, action.payload]}
    case ADD_VASE:
      return {...state, vaseId: action.payload}
    case CREATE_ARRANGEMENTS:
      return {...state, flowerIds: [], vaseId: null}
    case GET_ARRANGEMENTS_FLOWERS + FULFILLED:
      return {...state, arrangementsData: action.payload}
    case DELETE_ARRANGEMENT + FULFILLED:
      let { id } = action.payload
      // console.log(111111111, action.payload)
      let newArrangementsData = state.arrangementsData.filter( arrangement => {
        return !(arrangement.id === Number(id))
      })
      // console.log(222222222, newArrangementsData.length)
      // console.log(3333333333, state.arrangementsData.length)
      return { ...state, arrangementsData: newArrangementsData }
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

export function createArrangement (){
  return {
    type: CREATE_ARRANGEMENTS,
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

export function deleteArrangement (id) {
  let deleted = axios.delete(`/api/arrangements/flowers/${id}`).then(response => {
    return response.data
  })
  return {
    type: DELETE_ARRANGEMENT,
    payload: deleted
  }
}