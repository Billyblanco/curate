import { combineReducers } from 'redux'
import users from './usersReducer'
import flowers from './flowersReducer'
import vases from './vasesReducer'
import decor from './decorReducer'

export default combineReducers({ users, flowers, vases, decor })

