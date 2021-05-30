import { createStore } from 'redux'
import chatPageReducer from './chatPage/reducer'
const redux = require('redux')
const combineReducers = redux.combineReducers


const rootReducer = combineReducers({
    chatPage: chatPageReducer
})

const store = createStore(rootReducer)

export default store