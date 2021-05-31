import Header from "./Header";
import InputMessage from "./InputMessage";
import MessageWrapper from "./MessageWrapper";

function chatPage() {

    return (
        <div className="chatPage col-12 col-md-9 p-0 d-flex flex-column">
            <div className="topWraper d-flex flex-column">
                <Header />
                <MessageWrapper />
            </div>
            <InputMessage />
        </div>
    );
}

export default chatPage;
