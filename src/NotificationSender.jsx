import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:3000';
const API_URL = 'http://localhost:3000/socket';

const NotificationSender = () => {
    const [clientId, setClientId] = useState('');
    const [message, setMessage] = useState('');
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        // Connect to the WebSocket server when the component mounts
        const newSocket = io(SOCKET_URL, {
            transports: ['websocket'],
            cors: {
                origin: "http://localhost:3001", // Change to the URL of your React app
                credentials: true,
            }
        });
        
        

        newSocket.on('connection', (data) => {
            console.log(data);
            setClientId(newSocket.id);
        });

        newSocket.on('disconnect', () => {
            console.log('Disconnected from the server');
        });

        newSocket.on('notification', (message) => {
            console.log('Notification received:', message);
        });

        setSocket(newSocket);

        // Cleanup the connection when the component unmounts
       
    }, []);

    const handleSendNotification = async () => {
        try {
            await axios.post(`${API_URL}/send`, { clientId, message });
           // alert('Notification sent!');
        } catch (error) {
            console.error('Error sending notification:', error);
        }
    };

    return (
        <div>
            <h1>Send Notification</h1>
            <div>
                <label>
                    Message:
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </label>
            </div>
            <button onClick={handleSendNotification}>Send Notification</button>
        </div>
    );
};

export default NotificationSender;
