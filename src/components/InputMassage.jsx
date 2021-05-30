import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { addMasaage } from '../redux/chatPage/actions'

function InputMassage() {
    const dispatch = useDispatch()

    const [newMasaage, setNewMasaage] = useState()

    const inputRef = useRef()

    const sendMasaage = () => {

        setTimeout(() => {
            dispatch(addMasaage(newMasaage))
        }, 2000)
        inputRef.current.value = null
    }

    return (
        <div className="inputMassage">
            <input type="text" ref={inputRef} onChange={() => { setNewMasaage(inputRef.current.value) }} />
            <button onClick={() => { sendMasaage() }}>click</button>
        </div>
    );
}

export default InputMassage;
