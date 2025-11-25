import { io } from 'socket.io-client';
import JoinChatForm from './components/JoinChatForm/JoinChatForm';
import ChatWindow from './components/ChatWindow/ChatWindow';
import { useEffect, useState } from 'react';


// initializing the connection 
const socket = io('http://localhost:3001');

function App() {
  const [isInRoom, setIsInRoom] = useState(false);
  const [userName, setUserName] = useState('');
  const [roomId, setRoomId] = useState('');

  useEffect(() => {
    // event listener
    socket.on('connect', () => {
      console.log('socket connection has been established')
    });

    // runs when component unmounts
    return () => {
      socket.off('connect');
    }
  }, []);

  const handleJoinRoom = () => {
      // adding user to the room

      // set states and go to chat window page
  }


  return (
    <div>
      {isInRoom ? <ChatWindow/> :  <JoinChatForm onJoin={handleJoinRoom}/>}
    </div>
  );
}

export default App;
