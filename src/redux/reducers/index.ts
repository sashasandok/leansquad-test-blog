import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import post from './post'

export default combineReducers({
	routing: routerReducer,
	post,
})
