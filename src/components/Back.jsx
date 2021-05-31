import FontAwesome from 'react-fontawesome';
import { useDispatch } from "react-redux";
import { profileDetailsShow } from '../redux/chatPage/actions'

function Back() {

    const dispatch = useDispatch()

    return (
        <div className="back" onClick={() => { dispatch(profileDetailsShow(false)) }}>
            <button className="pl-3 py-1">
                <span className="px-1">back</span>
                <FontAwesome name="chevron-right" />
            </button>
        </div>
    )
}
export default Back