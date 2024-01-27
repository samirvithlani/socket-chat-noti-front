import React from 'react'
import { io } from 'socket.io-client'
const socket = io('http://localhost:5000/'); // Connect to the server

export const AddBadmintonScore = () => {
    const updateScore = () => {

        socket.emit("updateScore",{playerName:"viral",score:10})

    }

    const sendPushNotification = () => {
        socket.emit("noti","event will start in 5 min")
    }
  return (
    <div>
        <h1>CORDINATOR 1</h1>
        <button onClick={()=>{updateScore()}}>Update Score</button>
        <button onClick={()=>{sendPushNotification()}}>Send Push Notification</button>
    </div>
  )
}
