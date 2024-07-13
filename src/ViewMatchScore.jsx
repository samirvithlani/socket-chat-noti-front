import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client';
const socket = io('http://localhost:5000/'); // Connect to the server

export const ViewMatchScore = () => {
    const [score, setscore] = useState()
    useEffect(() => {
      
        socket.on("matchscore",(data)=>{
            console.log(data)
            setscore(data)
        })
      
    }, [])
    
  return (
    <div>
        {score?.user}-{score?.score} 
    </div>
  )
}
