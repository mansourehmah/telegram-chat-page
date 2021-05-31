import { useSelector } from 'react-redux'
import Message from './Message';

function MessageWrapper() {
    const message = useSelector(state => state.chatPage.data)

    return (
        <div className="messageWrapper p-0">
            <div className="messageBox py-2 px-1">
                {message.map((message) => {
                    return (
                        <div key={message.id + '-message'} className={message.user === 'me' ? 'd-flex msg-me' : 'd-flex msg-user'}>
                            <Message msg={message.msg} user={message.user} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MessageWrapper;
