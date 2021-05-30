import Header from "./Header";
import InputMassage from "./InputMassage";
import MassageWrapper from "./MassageWrapper";

function chatPage() {

    // const open = useSelector(state => state.chatPage.open)
    return (
        <div className="chatPage col-9 p-0 d-flex justify-content-center flex-column">
            <Header />
            <MassageWrapper />
            <InputMassage />
        </div>
    );
}

export default chatPage;
