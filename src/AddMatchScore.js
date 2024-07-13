import React from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000/"); // Connect to the server

export const AddMatchScore = () => {
  const addScore = () => {
    socket.emit("matchscore", { score: 100, user: "A" });
  };

  return <div>AddMatchScore

    <button onClick={()=>{addScore()}}>Add Match Score</button>
  </div>;
};
