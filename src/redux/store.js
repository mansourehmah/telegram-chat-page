import { createStore } from 'redux'
import chatPageReducer from './chatPage/reducer'
import { fetchData } from './chatPage/actions'
import thunckMiddleWare from 'redux-thunk'

const redux = require('redux')
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware


const rootReducer = combineReducers({
    chatPage: chatPageReducer
})

const store = createStore(rootReducer, applyMiddleware(thunckMiddleWare))
store.dispatch(fetchData())

export default store