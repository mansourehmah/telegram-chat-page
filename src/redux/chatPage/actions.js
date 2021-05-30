import { PROFILE_DETAILS, ADD_MASSAGE } from './types'

export const profileDetails = (open) => {
    return {
        type: PROFILE_DETAILS,
        open
    }
}
export const addMasaage = (newMsg) => {
    return {
        type: ADD_MASSAGE,
        newMsg
    }
}