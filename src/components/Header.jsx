import { useDispatch, useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import { profileDetailsShow } from '../redux/chatPage/actions'


function Header(props) {
    const userInfo = useSelector(state => state.chatPage.user)
    // const openDetails = useSelector(state => state.chatPage.open)

    const dispatch = useDispatch()

    return (
        <div className={props.openDetails ? "open header d-flex align-items-center px-1" : " header d-flex align-items-center px-1 "} onClick={() => { dispatch(profileDetailsShow(true)) }}>
            <div className={props.openDetails ? "d-flex align-items-center col-12 p-0" : "clickAble d-flex align-items-center col-12 p-0"}>
                <div className="picture p-2">
                    <img src={userInfo.profilePic} alt={userInfo.name} />
                </div>
                <div>
                    <h4 className="mb-0">
                        {userInfo.name}
                    </h4>
                </div>
            </div>
            {props.openDetails ? <ProfileDetails userInfo={userInfo} openDetails={props.openDetails} /> : ''}
        </div>
    );
}

export default Header;
