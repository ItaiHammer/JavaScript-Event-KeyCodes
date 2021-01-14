import react, { useState } from 'react';
import { motion } from 'framer-motion';

//files
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
    const [copyMessage, setCopyMessage] = useState('Click to Copy');

    const clickBoxVariants = {
        hidden: {
            opacity: 0,
            y: -100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                type: 'spring',
            },
        },
    };

    const boxVariants = {
        hover: {
            y: -20,
            transition: {
                duration: 1,
                type: 'spring',
            },
        },
        click: {
            scale: 1.1,
            transition: {
                duration: 1,
                type: 'spring',
            },
        },
    };
    const titleVariants = {
        click: {
            scale: 1.1,
            transition: {
                duration: 1,
                type: 'spring',
            },
        },
    };
    const footerVariants = {
        hidden: {
            opacity: 0,
            y: '3vw',
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                delay: 0.5,
                type: 'spring',
            },
        },
    };
    const mentionVariants = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 2,
                delay: 1,
            },
        },
        hover: {
            color: [
                '#AAAAA6',
                '#BE74D4',
                '#5FA9E7',
                '#98C379',
                '#CF9965',
                '#E06C75',
            ],
        },
    };

    function getKeyInfo(e) {
        if (clicked === false) {
            setClicked(true);
        }

        setKey(e.key);
        setKeyCode(e.keyCode);
        setEventCode(e.code);
        setLocation(e.location);

        console.log(e);
    }

    function copyEventCode() {
        navigator.clipboard.writeText(eventCode);
        setCopyMessage(`Copied event.eventCode: ${eventCode}`);
    }

    function copyKey() {
        navigator.clipboard.writeText(key);
        setCopyMessage(`Copied event.key: ${key}`);
    }

    function copyKeyCode() {
        navigator.clipboard.writeText(keyCode);
        setCopyMessage(`Copied event.keyCode: ${keyCode}`);
    }
    function copyLocation() {
        navigator.clipboard.writeText(location);
        setCopyMessage(`Copied event.location: ${location}`);
    }

    return (
        <div className="App" onKeyDown={getKeyInfo} tabIndex="0">
            <motion.div
                className="click-key-box"
                style={offWhileClicked}
                variants={clickBoxVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="click-key-header"></div>
                <div className="click-key-container">
                    <h1 className="click-key">
                        Press any key to get the JavaScript key information
                    </h1>
                </div>
            </motion.div>

            <motion.h1
                className="keycode-event-code"
                style={onWhileClicked}
                variants={titleVariants}
                whileTap="click"
                onClick={copyEventCode}
            >
                {eventCode}
            </motion.h1>

            <div className="box-container" style={onWhileClicked}>
                <motion.div
                    className="box"
                    variants={boxVariants}
                    whileHover="hover"
                    whileTap="click"
                    onClick={copyKey}
                >
                    <div className="box-title-container">
                        <h1 className="box-title">event.key</h1>
                    </div>
                    <div className="keycode-container">
                        <h1 className="keycode-name">"{key}"</h1>
                    </div>
                </motion.div>

                <motion.div
                    className="box"
                    variants={boxVariants}
                    whileHover="hover"
                    whileTap="click"
                    onClick={copyKeyCode}
                >
                    <div className="box-title-container">
                        <h1 className="box-title">event.keyCode</h1>
                    </div>
                    <div className="keycode-container">
                        <h1 className="keycode-name">{keyCode}</h1>
                    </div>
                </motion.div>

                <motion.div
                    className="box"
                    variants={boxVariants}
                    whileHover="hover"
                    whileTap="click"
                    onClick={copyLocation}
                >
                    <div className="box-title-container">
                        <h1 className="box-title">event.location</h1>
                    </div>
                    <div className="keycode-container">
                        <h1 className="keycode-name">{location}</h1>
                    </div>
                </motion.div>
            </div>

            <h1 className="copy-message" style={onWhileClicked}>
                {copyMessage}
            </h1>

            <motion.div
                className="footer"
                variants={footerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.a
                    className="mention"
                    href="https://itaihammer.github.io/Social-Page/"
                    target="_blank"
                    variants={mentionVariants}
                    whileHover="hover"
                >
                    Made By Itai Hammer
                </motion.a>
            </motion.div>
        </div>
    );
}

export default App;
