import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux'
import Message from './Message';
import Loading from "./Loading";

function MessageWrapper() {
    const message = useSelector(state => state.chatPage.data)
    const loading = useSelector(state => state.chatPage.loading)
    const msgWrapperRef = useRef()

    useEffect(() => {
        msgWrapperRef.current.scrollTop = msgWrapperRef.current.scrollHeight
    }, [message])

    return (
        <div className='messageWrapper p-0' ref={msgWrapperRef}>
            {loading ? <Loading /> : ''}
            <div className="messageBox py-2 px-1">
                {message.map((message) => {
                    return (
                        <div key={message.id + '-message'} className={message.user === 'me' ? 'd-flex msg-me' : 'd-flex msg-user'}>
                            <Message msg={message.msg} user={message.user} time={message.time} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default MessageWrapper;
