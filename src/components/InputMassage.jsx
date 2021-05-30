import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addMasaage } from '../redux/chatPage/actions'

function InputMassage() {
    const dispatch = useDispatch()

    const [newMasaage, setNewMasaage] = useState(null)

    const inputRef = useRef()
    const buttonRef = useRef()

    const setMassage = () => {
        setNewMasaage(inputRef.current.value)
        if (inputRef.current.value.length > 0) {
            buttonRef.current.disabled = false
        }
        else {
            buttonRef.current.disabled = true
        }
    }

    const sendMasaage = () => {
        setTimeout(() => {
            dispatch(addMasaage(newMasaage))
        }, 2000)
        inputRef.current.value = null
        buttonRef.current.disabled = true
    }
    useEffect(() => {
        buttonRef.current.disabled = true
    }, [])

    return (
        <div className="inputMassage">
            <input type="text" ref={inputRef} onChange={() => { setMassage() }} />
            <button onClick={() => { sendMasaage() }} ref={buttonRef}>click</button>
        </div>
    );
}

export default InputMassage;
