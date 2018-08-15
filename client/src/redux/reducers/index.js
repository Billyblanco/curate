import { combineReducers } from 'redux'
import users from './usersReducer'
import products from './productReducer'
import arrangements from './arrangementsReducer'

export default combineReducers({ users, products, arrangements })

