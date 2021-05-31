import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import Message from './Message';

function MessageWrapper() {
    const message = useSelector(state => state.chatPage.data)
    const msgWrapperRef = useRef()

    useEffect(() => {
        msgWrapperRef.current.scrollTop = msgWrapperRef.current.scrollHeight
    }, [message])

    return (
        <div className='messageWrapper p-0' ref={msgWrapperRef}>
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
