import React, {createContext, useState} from 'react'

export const ThemeContext = createContext({
    theme: 'light',
    togThemeHdl: () => {}
})

export const ThemeProvider = ({children}: {children: React.ReactNode}) => {
    const [theme, setTheme] = useState('light')

    function toggleThemeHandler(): void {
        setTheme(theme === 'light'? 'dark': 'light')
    }

    return (
/* ---------------------------------------------------------- must be theme only not theme:'light' ---------------------------------------------------------- */
        <ThemeContext.Provider value={{theme, togThemeHdl:toggleThemeHandler}}>
            {children}
        </ThemeContext.Provider>
    )
}