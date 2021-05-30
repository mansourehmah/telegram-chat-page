import { PROFILE_DETAILS } from './types'

const initialState = {
    item: [],
    open: false

}


const chatPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case PROFILE_DETAILS: {

            return {
                ...state,
                open: !state.open
            }
        }

        default: return state
    }
}

export default chatPageReducer