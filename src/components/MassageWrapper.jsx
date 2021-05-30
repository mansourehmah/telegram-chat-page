import { useSelector } from 'react-redux'
import Massage from './Massage';

function MassageWrapper() {
    const masaage = useSelector(state => state.chatPage.data)

    return (
        <div className="massageWrapper">
            <div className="massageBox">
                {masaage.map((masaage) => {
                    return (
                        <div key={masaage.id}>
                            <Massage msg={masaage.msg} user={masaage.user} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MassageWrapper;
