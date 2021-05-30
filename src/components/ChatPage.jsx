import { useSelector } from 'react-redux'


function App() {
    const open = useSelector(state => state.chatPage.open)

    return (
        <h1>chatpage {open}</h1>
    );
}

export default App;
