import React, { FC, useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./Chat";

const socket = io("http://localhost:3001");

const App: FC =  () => {
  const [userName, setUserName] = useState<string>("");
     const [room, setRoom] = useState<string>("");
     const [showChat, setShowChat] = useState<boolean>(false);

     const joinRoom = () => {
       if (userName && room) {
         socket.emit("join_room", room);
         setShowChat(true);
       }
     };

  return (
    <div className="App">
      { !showChat ? (
        <div className="joinChatContainer">
          <h3>Join a Chat</h3>
          <input
            type="text"
            placeholder="Username"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Room ID..."
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                joinRoom();
              }
            }}
          />
          <button onClick={joinRoom}>Join a Room</button>
        </div> )
        : (
          <Chat socket={socket} userName={userName} room={room} />
        )}
    </div>
  );
}

export default App;
