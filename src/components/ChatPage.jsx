import Header from "./Header";
import InputMessage from "./InputMessage";
import MessageWrapper from "./MessageWrapper";

function chatPage() {

    return (
        <div className="chatPage col-9 p-0 d-flex justify-content-center flex-column">
            <Header />
            <MessageWrapper />
            <InputMessage />
        </div>
    );
}

export default chatPage;
