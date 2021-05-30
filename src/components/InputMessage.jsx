import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addMessage} from '../redux/chatPage/actions'

function InputMessage() {
    const dispatch = useDispatch()

    const [newMessage, setNewMessage] = useState(null)

    const inputRef = useRef()
    const buttonRef = useRef()

    const setMessage = () => {
        setNewMessage(inputRef.current.value)
        if (inputRef.current.value.length > 0) {
            buttonRef.current.disabled = false
        }
        else {
            buttonRef.current.disabled = true
        }
    }

    const sendMessage = () => {
        setTimeout(() => {
            dispatch(addMessage(newMessage))
        }, 2000)
        inputRef.current.value = null
        buttonRef.current.disabled = true
    }
    useEffect(() => {
        buttonRef.current.disabled = true
    }, [])

    return (
        <div className="inputMessage">
            <input type="text" ref={inputRef} onChange={() => { setMessage() }} />
            <button onClick={() => { sendMessage() }} ref={buttonRef}>click</button>
        </div>
    );
}

export default InputMessage;
