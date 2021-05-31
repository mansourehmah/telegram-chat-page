import { PROFILE_DETAILS, ADD_MESSAGE, FETCH_ERROR, FETCH_SUCCESS, FETCH_REQUEST, POST_ERROR, POST_SUCCESS, POST_REQUEST } from './types'
import axios from 'axios';

export const profileDetailsShow = (open) => {
    return {
        type: PROFILE_DETAILS,
        open
    }
}
export const addMessage = (newMsg) => {
    return {
        type: ADD_MESSAGE,
        newMsg
    }
}
export const fetchDataRequest = () => {
    return {
        type: FETCH_REQUEST,
    }
}

export const fetchDataSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        data
    }
}

export const fetchDataError = () => {
    return {
        type: FETCH_ERROR,
    }
}
export const postMessageRequest = () => {
    return {
        type: POST_REQUEST,
    }
}

export const postMessageSuccess = (data) => {
    return {
        type: POST_SUCCESS,
        data
    }
}

export const postMessageError = () => {
    return {
        type: POST_ERROR,
    }
}

export const fetchData = () => {
    return function (dispatch) {
        dispatch(fetchDataRequest())
        axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/test/chat').then(res => {
            const data = res.data
            dispatch(fetchDataSuccess(data))
        })
            .catch(() => {
                dispatch(fetchDataError())
            })
    }
}

export const postMessage = (message) => {
    return function (dispatch) {
        axios.post('https://605cf7f76d85de00170db614.mockapi.io/api/test/chat', message).then(() => {
            axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/test/chat').then((res) => {
                const data = res.data
                dispatch(postMessageSuccess(data))
            })
        })
            .catch(() => {
                dispatch(postMessageError())
            })
    }
}