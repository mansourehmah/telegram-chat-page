import { PROFILE_DETAILS, ADD_MESSAGE } from './types'

export const profileDetails = (open) => {
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