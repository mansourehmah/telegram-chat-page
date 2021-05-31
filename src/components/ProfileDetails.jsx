import Info from "./Info";

function ProfileDetails(props) {

    return (
        <div className={props.openDetails ? 'profileDetails open' : 'profileDetails'}>
            <div className="p-3">
                <h5 className="mb-3">info</h5>
                <div className="infoWrapper d-flex flex-column">
                    {Object.keys(props.userInfo.info).map((_key, index) => {
                        return (
                            <div className="info pb-3 mb-3 d-flex flex-column" key={'info-' + index} >
                                <Info title={_key} value={props.userInfo.info[_key]} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
}

export default ProfileDetails;
