// File Name: App.js

import React, { useState } from 'react';
import ProfileA from './Components/ProfileA';
import ProfileB from './Components/ProfileB';
import ProfileC from './Components/ProfileC';
import ProfileD from './Components/ProfileD';
import './App.css';

function App() {
    const [selectedProfile, setSelectedProfile] = useState('B');

    const renderProfile = () => {
        switch (selectedProfile) {
            case 'A':
                return <ProfileA />;
            case 'B':
                return <ProfileB />;
            case 'C':
                return <ProfileC />;
            case 'D':
                return <ProfileD />;
            default:
                return <ProfileB />;
        }
    };

    return (
        <div className="App">
            <h1>Profile Viewer</h1>
            <div className="button-container">
                <button onClick={() => setSelectedProfile('A')}>Show Profile A</button>
                <button onClick={() => setSelectedProfile('B')}>Show Profile B</button>
                <button onClick={() => setSelectedProfile('C')}>Show Profile C</button>
                <button onClick={() => setSelectedProfile('D')}>Show Profile D</button>
            </div>
            <div className="profile-box">
                {renderProfile()}
            </div>
        </div>
    );
}

export default App;