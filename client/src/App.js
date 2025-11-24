import { io } from 'socket.io-client';
import JoinChatForm from './components/JoinChatForm/JoinChatForm';


// initializing the connection 
const socket = io('http://localhost:3001');

function App() {
  return (
    <div>
     <JoinChatForm />
    </div>
  );
}

export default App;
