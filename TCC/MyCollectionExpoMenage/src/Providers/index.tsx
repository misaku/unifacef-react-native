import React from "react";
import {MyThemeProvider} from "../hooks/Theme.hooks";
import {ConfigThemeProvider} from "./ConfigThemeProvider";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {AuthProvider} from "../hooks/Auth.hooks";
export const Providers: React.FC =({children})=>{

    return(
        <MyThemeProvider>
            <ConfigThemeProvider>
                <AuthProvider>
                    <NativeBaseProvider>
                        <NavigationContainer>
                            {children}
                        </NavigationContainer>
                    </NativeBaseProvider>
                </AuthProvider>
            </ConfigThemeProvider>
        </MyThemeProvider>
    )
}
