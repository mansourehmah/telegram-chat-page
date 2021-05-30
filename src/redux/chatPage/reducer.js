import { PROFILE_DETAILS } from './types'

const initialState = {
    data: [
        {
            id: 1,
            user: 'me',
            msg: 'hi',
        },
        {
            id: 2,
            user: 'sampleUser',
            msg: 'hi !'
        },
        {
            id: 3,
            user: 'me',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, molestiae!'
        },
        {
            id: 4,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet consectetur'
        },
        {
            id: 5,
            user: 'me',
            msg: ':)))'
        },
        {
            id: 6,
            user: 'me',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore'
        },
        {
            id: 7,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet'
        },
        {
            id: 8,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, molestiae!'
        },
        {
            id: 9,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
        },
        {
            id: 10,
            user: 'me',
            msg: 'Lorem ipsum dolor.'
        },
        {
            id: 11,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit.'
        }
    ],
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