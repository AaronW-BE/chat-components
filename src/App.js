import './App.css';
import React, {useState} from "react";
import Message from "./components/message/Message";

import {ThemeContext, themes} from './context/theme-context';
import InputContainer from "./components/inputContainer/inputContainer";
import InputPanel from "./components/inputPanel/inputPanel";

function App() {
    const [theme, setTheme] = useState(themes.dark);

    const [messages, setMessages] = useState([]);

    function switchTheme() {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    function handleTextSubmit({text, time}) {
        let msgList = [...messages];
        msgList.push({
            text,
            self: Math.random() * 10 > 5,
            time,
        })
        setMessages(msgList);
        console.log('handle text')
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <header className="App-header" style={theme}>
                    {
                        messages.map(message => {
                            return <Message key={message.time} text={message.text} self={message.self} />
                        })
                    }
                    {/*<Message self={true}/>*/}
                    {/*<Message/>*/}
                    {/*<Message/>*/}
                    <button onClick={switchTheme}>切换主题</button>
                </header>
                <InputContainer>
                    <InputPanel onsubmit={handleTextSubmit} />
                </InputContainer>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
