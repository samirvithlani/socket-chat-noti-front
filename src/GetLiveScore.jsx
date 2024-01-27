import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetLiveScore = () => {
  const socket = io("http://localhost:5000/"); // Connect to the server
  const [score, setscore] = useState(0)
  useEffect(() => {
    console.log("useEffect called");
    socket.on("updateScore", (data) => {
      console.log("data in live score...",data);
    })
    socket.on("noti", (data) => {
      toast(data, {
        position: "bottom-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    })
  }, []);

  return (
    <div>
      
      <h1>live score</h1>

      <ToastContainer
position="bottom-left"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"/>

      
    </div>
  );
};
