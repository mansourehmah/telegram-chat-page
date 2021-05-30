import { useSelector } from 'react-redux'
import Message from './Message';

function MessageWrapper() {
    const message = useSelector(state => state.chatPage.data)

    return (
        <div className="messageWrapper">
            <div className="messageBox">
                {message.map((message) => {
                    return (
                        <div key={message.id}>
                            <Message msg={message.msg} user={message.user} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MessageWrapper;
