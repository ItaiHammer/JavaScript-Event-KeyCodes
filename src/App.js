import react, { useState } from 'react';
import './App.css';

function App() {
    const [key, setKey] = useState(null);
    const [keyCode, setKeyCode] = useState(null);
    const [eventCode, setEventCode] = useState(null);
    const [location, setLocation] = useState(null);
    const [clicked, setClicked] = useState(false);
    const onWhileClicked = {
        display: clicked ? 'flex' : 'none',
    };
    const offWhileClicked = {
        display: clicked ? 'none' : 'flex',
    };

    function getKeyInfo(e) {
        if (clicked === false) {
            setClicked(true);
        }

        setKey(e.key);
        setKeyCode(e.keyCode);
        setEventCode(e.code);
        setLocation(e.location);
    }

    return (
        <div className="App" onKeyDown={getKeyInfo} tabIndex="0">
            <div className="click-key-container" style={offWhileClicked}>
                <h1 className="click-key">Click a Button</h1>
            </div>

            <h1 className="keycode-event-code" style={onWhileClicked}>
                {eventCode}
            </h1>

            <div className="box-container" style={onWhileClicked}>
                <div className="box">
                    <h1 className="box-title">Key Name</h1>
                    <h1 className="keycode-name">"{key}"</h1>
                </div>

                <div className="box" style={onWhileClicked}>
                    <h1 className="box-title">Key Code</h1>
                    <h1 className="keycode-code">{keyCode}</h1>
                </div>

                <div className="box" style={onWhileClicked}>
                    <h1 className="box-title">Location</h1>
                    <h1 className="keycode-location">{location}</h1>
                </div>
            </div>
        </div>
    );
}

export default App;
