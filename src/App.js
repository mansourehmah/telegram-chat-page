import { Provider } from 'react-redux'
import store from './redux/store'
import ChatPage from './components/ChatPage'


function App() {

  return (
    <Provider store={store}>
      <div className="main d-flex justify-content-center align-items-center">
        <ChatPage />
      </div>
    </Provider>
  );
}

export default App;
