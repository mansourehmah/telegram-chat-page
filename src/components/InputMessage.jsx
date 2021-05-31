import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addMessage } from '../redux/chatPage/actions'

function InputMessage() {
    const dispatch = useDispatch()

    const [newMessage, setNewMessage] = useState(null)

    const inputRef = useRef()
    const buttonRef = useRef()

    const setMessage = () => {
        setNewMessage(inputRef.current.innerText)

        if (inputRef.current.innerText.length > 0) {
            buttonRef.current.disabled = false
        }
        else buttonRef.current.disabled = true
    }

    const sendMessage = () => {
        setTimeout(() => {
            dispatch(addMessage(newMessage))
        }, 2000)
        inputRef.current.innerHTML = null
        buttonRef.current.disabled = true
        inputRef.current.focus()
    }
    useEffect(() => {
        inputRef.current.focus()
        buttonRef.current.disabled = true
    }, [])

    return (
        <div className="inputMessage d-flex align-items-center">
            {/* <textarea className="p-1" ref={inputRef} onChange={() => { setMessage() }}></textarea> */}
            <p ref={inputRef} contentEditable="true" className="mb-0 p-1" onKeyUp={() => { setMessage() }}></p>
            <button onClick={() => { sendMessage() }} ref={buttonRef}>send</button>
        </div>
    );
}

export default InputMessage;
