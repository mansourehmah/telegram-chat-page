import { useDispatch, useSelector } from "react-redux";
import ProfileDetails from "./ProfileDetails";
import { profileDetailsShow } from '../redux/chatPage/actions'


function Header(props) {
    const userInfo = useSelector(state => state.chatPage.user)

    const dispatch = useDispatch()

    return (
        <div className=" header d-flex align-items-center p-0 ">
            <div
                className={
                    props.openDetails ?
                        "open topHeader d-flex align-items-center col-12 px-0" :
                        "topHeader clickAble d-flex align-items-center col-12 px-0"
                }
                onClick={() => { if (!props.openDetails) dispatch(profileDetailsShow(true)) }}
            >
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
