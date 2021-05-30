function Message(props) {
    return (
        <div className={props.user === 'me' ? 'msg msg-me p-1 m-1' : 'msg msg-user p-1 m-1'} >
            {props.msg}
        </div>
    );
}

export default Message;
