import './App.css';
import React, {useState} from "react";
import Message from "./components/message/Message";

import {ThemeContext, themes} from './context/theme-context';

function App() {
    const [theme, setTheme] = useState(themes.dark);

    function switchTheme() {
        setTheme(theme === themes.dark ? themes.light : themes.dark);
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className="App">
                <header className="App-header" style={theme}>
                    <Message self={true}/>
                    <Message/>
                    <Message/>
                    <button onClick={switchTheme}>切换主题</button>
                </header>
            </div>
        </ThemeContext.Provider>
    );
}

export default App;
