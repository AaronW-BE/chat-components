import React from "react";

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#282c34',
    }
};

export const ThemeContext = React.createContext({
    theme: themes.light
});
