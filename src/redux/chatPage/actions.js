import { PROFILE_DETAILS, ADD_MESSAGE } from './types'

export const profileDetails = () => {
    return {
        type: PROFILE_DETAILS,
    }
}
export const addMessage = (newMsg) => {
    return {
        type: ADD_MESSAGE,
        newMsg
    }
}