import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import io from 'socket.io-client';
import { AddBadmintonScore } from './AddBadmintonScore';
import { GetLiveScore } from './GetLiveScore';

const socket = io('http://localhost:5000/'); // Connect to the server

function App() {
    const [liveScoreUpdate, setLiveScoreUpdate] = useState(null);

    useEffect(() => {
        // Listen for live score updates
        socket.on('liveScoreUpdate', (data) => {
          console.log(data);
            setLiveScoreUpdate(data.message);
        });
    }, []);

    return (
        <div className="App">
            
            <h1>Live Score Updates</h1>
            {liveScoreUpdate && <p>{liveScoreUpdate}</p>}
            {/* Add your live score components here */}
            <Routes>
                    <Route path='/updateScore' element ={<AddBadmintonScore/>}></Route>
                    <Route path ="/getlivescore" element= {<GetLiveScore/>}></Route>
            </Routes>
        </div>
    );
}

export default App;
