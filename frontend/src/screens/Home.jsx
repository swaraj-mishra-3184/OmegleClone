import React from "react";
import ChatSection from "../components/ChatSection";

function Home() {
  return (
    <div className="h-screen flex bg-blue-950">
      <div className="w-1/2 flex flex-col items-center justify-center text-white text-5xl font-bold">
        <div>Omegle</div>
       
      </div>
      <div className="w-1/2 h-full">
        <ChatSection />
      </div>
    </div>
  );
}

export default Home;
