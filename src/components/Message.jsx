function Message(props) {
    return (
        <div className={props.user === 'me' ? 'msg p-1 pl-3 m-1' : 'msg p-1 pr-3 m-1'}>
            <p>{props.msg}</p>
            <span className="time">{props.time}</span>
        </div>
    );
}

export default Message;
