import axios from 'axios'
const FULFILLED ='_FULFILLED'
const GET_ORDERS_ARRANGEMENTS = 'GET_ORDERS_ARRANGEMENTS'

let initialState = {
  orders: []
  
}
export default function reducer (state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS_ARRANGEMENTS + FULFILLED:
      return {...state, orders: action.payload}
    default:
    return state
  }
}

export function getOrdersArrangements () {
  let ordered = axios.get('/api/orders').then(response => {
    return response.data
  })
  return {
    type: GET_ORDERS_ARRANGEMENTS,
    payload: ordered
  }
}