import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import NotificationSender from './NotificationSender';

const App = () => {
    useEffect(() => {
        const socket = io('http://localhost:3000', {
            transports: ['websocket'],
            cors: {
                origin: "http://localhost:3001", // Change to the URL of your React app
                credentials: true,
            }
        });
        socket.on('connection', (data) => {
            console.log("app.js////",data);
        });

        socket.on('notification', (message) => {
            alert('Notification received: ' + message);
            console.log('Notification received: ' + message);
        });

        return () => {
            if (socket) {
                socket.disconnect();
            }
        };
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path='/notification' element={<NotificationSender />} />
            </Routes>
        </div>
    );
}

export default App;
