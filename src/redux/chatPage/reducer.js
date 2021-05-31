import { PROFILE_DETAILS, ADD_MESSAGE } from './types'
import profilePic from '../../assets/img/profile.jpg'

const initialState = {
    data: [
        {
            id: 1,
            user: 'me',
            msg: 'hi',
            time: '12:30'
        },
        {
            id: 2,
            user: 'sampleUser',
            msg: 'hi !',
            time: '12:30'
        },
        {
            id: 3,
            user: 'me',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, molestiae!',
            time: '12:40'
        },
        {
            id: 4,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet consectetur',
            time: '13:45'
        },
        {
            id: 5,
            user: 'me',
            msg: ':)))',
            time: '15:01'
        },
        {
            id: 6,
            user: 'me',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore',
            time: '17:33'
        },
        {
            id: 7,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet',
            time: '18:00'
        },
        {
            id: 8,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, molestiae!',
            time: '18:30'
        },
        {
            id: 9,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
            time: '18:30'
        },
        {
            id: 10,
            user: 'me',
            msg: 'Lorem ipsum dolor.',
            time: '19:21'
        },
        {
            id: 11,
            user: 'sampleUser',
            msg: 'Lorem ipsum dolor sit.',
            time: '17:31'
        }
    ],
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
            return {
                ...state,
                data: [...state.data, newMessage]
            }
        }
        default: return state

    }
}

export default chatPageReducer