import React, { useEffect, useState } from 'react';
import SockJS from 'sockjs-client';
import { Client } from '@stomp/stompjs';
import Chat from './components/Chat';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [stompClient, setStompClient] = useState(null);

  useEffect(() => {
    const socket = new SockJS('/ws'); // Connect to the WebSocket endpoint
    const client = new Client({ webSocketFactory: () => socket }); // Create a new Stomp client

    // Connect to the WebSocket and subscribe to the '/topic/messages' channel
    client.onConnect = () => {
      client.subscribe('/topic/messages', (msg) => {
        const newMessage = JSON.parse(msg.body);
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      });
    };

    // Establish the connection
    client.activate();

    // Store the Stomp client instance
    setStompClient(client);

    // Clean up function to disconnect when component unmounts
    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
  }, []); // Only run this effect once on component mount

  const sendMessage = (message) => {
    if (stompClient && stompClient.connected) {
      stompClient.publish({ destination: '/app/chat', body: JSON.stringify(message) });
    }
  };

  return (
    <div>
      <Chat messages={messages} sendMessage={sendMessage} />
    </div>
  );
};

export default App;
