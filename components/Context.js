import { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext();

export default function Context({children})
{
    const [darkMode, setDarkMode] = useState(true);
    function changeDarkMode(){
        setDarkMode(!darkMode);
    }
    return (
        <DarkModeContext.Provider value={{darkMode, changeDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export function DarkModeContextReturn(){
    //Remember that this is a function and must be called with DarkModeContextReturn() because I can't remember things
    return useContext(DarkModeContext);
}