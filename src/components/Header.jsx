import { useSelector } from "react-redux";


function Header() {
    const userInfo = useSelector(state => state.chatPage.user)
    return (
        <div className="header d-flex align-items-center px-1">
            <div className="picture p-2">
                <img src={userInfo.profilePic} alt={userInfo.name} />
            </div>
            <div>
                <h4 className="mb-0">
                    {userInfo.name}
                </h4>
            </div>
        </div>
    );
}

export default Header;
