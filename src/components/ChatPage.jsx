import { useSelector } from "react-redux";
import Header from "./Header";
import InputMessage from "./InputMessage";
import MessageWrapper from "./MessageWrapper";

function ChatPage() {

    const openDetails = useSelector(state => state.chatPage.open)

    return (
        <div className='chatPageWrapper col-12 col-md-9 p-0'>
            <div className="chatPage col-12 p-0 d-flex flex-column">
                <Header openDetails={openDetails} />
                <div className={openDetails ? "transformToBottom bottomWrapper d-flex flex-column" : "bottomWrapper d-flex flex-column"} >
                    <MessageWrapper />
                    <InputMessage />
                </div>
            </div>
        </div>
    );
}

export default ChatPage;
