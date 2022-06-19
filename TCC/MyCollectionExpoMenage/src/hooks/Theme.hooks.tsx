import {DefaultTheme} from "styled-components";
import React, {createContext, useContext, useEffect, useState} from "react";
import {mainTheme} from "../styles/mainTheme";
import {lightTheme} from "../styles/lightTheme";
import { Appearance, useColorScheme } from 'react-native';

interface MyThemeProps {
    theme: DefaultTheme,

    changeTheme(): void
}

const ThemeContext = createContext<MyThemeProps>({
    theme: mainTheme,
    changeTheme() {
    }
} as MyThemeProps)

const themes = [
    mainTheme,
    lightTheme
]
export const MyThemeProvider: React.FC = ({children}) => {
    const [myTheme, setMyTheme] = useState<DefaultTheme>(themes[0])
    const [myThemeIdex, setMyThemeIndex] = useState<number>(0)
    let colorScheme = useColorScheme();


    useEffect(()=>{
        if (colorScheme === 'dark') {
            // render some dark thing
            setMyTheme(themes[0])
            setMyThemeIndex(0)
        } else {
            setMyTheme(themes[1])
            setMyThemeIndex(1)
            // render some light thing
        }
    },[colorScheme])

    const changeTheme = () => {
        if (myThemeIdex === 0) {
            setMyTheme(themes[1])
            setMyThemeIndex(1)
        } else {
            setMyTheme(themes[0])
            setMyThemeIndex(0)
        }
    }

    return (
        <ThemeContext.Provider value={{theme: myTheme, changeTheme}}>
            {
                children
            }
        </ThemeContext.Provider>
    )
}

export const useMyTheme: () => MyThemeProps = () => {
    return useContext<MyThemeProps>(ThemeContext);
}
