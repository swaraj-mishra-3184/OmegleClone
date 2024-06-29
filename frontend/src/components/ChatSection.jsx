import React, { useState } from 'react';

function ChatSection() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  const handleSkip = () => {
    // Logic for skipping (e.g., clearing messages or any other desired action)
    setMessages([]);
  };

  const handleNext = () => {
    // Logic for going to the next chat or action
    console.log('Next button clicked');
  };

  return (
    <div className="flex flex-col h-full bg-white">
      <div className="flex-1 p-4 overflow-auto">
        <div className="space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="p-2 bg-blue-500 text-white rounded-lg">
              {msg}
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-white flex">
        <button
          onClick={handleSkip}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-l-lg"
        >
          Stop
        </button>
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l-none rounded-r-none focus:outline-none"
          placeholder="Type a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l-none rounded-r-none"
        >
          Send
        </button>
        <button
          onClick={handleNext}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-lg ml-2"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ChatSection;
