import { PROFILE_DETAILS, ADD_MESSAGE, FETCH_ERROR, FETCH_SUCCESS, FETCH_REQUEST, POST_ERROR, POST_SUCCESS, POST_REQUEST } from './types'
import profilePic from '../../assets/img/profile.jpg'
import { postMessage } from './actions'
import store from '../store'

const initialState = {
    data: [],
    user: {
        id: 353463,
        name: 'sampleUser',
        profilePic:
            // 'url'
            profilePic,
        info: {
            mobile: '+989190000000',
            username: '@sampleuser',
            bio: 'its bio :)))'
        }
    },
    open: false,
    loading: false
}


const chatPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DETAILS: {
            return {
                ...state,
                open: action.open
            }
        }
        case ADD_MESSAGE: {
            const time = new Date()
            const newMessage = {
                id: state.data.length + 1,
                user: 'me',
                msg: action.newMsg,
                time: time.getHours() + ':' + time.getMinutes()
            }
            store.dispatch(postMessage(newMessage))
            return {
                ...state,
                data: [...state.data, newMessage]
            }
        }
        case FETCH_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        }
        case FETCH_ERROR: {
            return {
                ...state,
                loading: true,
            }
        }
        case POST_REQUEST: {
            return {
                ...state,
                loading: true
            }
        }
        case POST_SUCCESS: {
            return {
                ...state,
                loading: false,
                data: action.data,
            }
        }
        case POST_ERROR: {
            return {
                ...state,
                loading: true,
            }
        }
        default: return state

    }
}

export default chatPageReducer