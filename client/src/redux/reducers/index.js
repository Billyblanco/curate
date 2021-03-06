import { combineReducers } from 'redux'
import users from './usersReducer'
import products from './productReducer'
import arrangements from './arrangementsReducer'
import order from './orderReducer'
import decor from './decorReducer'

export default combineReducers({ users, products, arrangements, order, decor })

