import {StatusBar} from 'expo-status-bar';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {Background} from './src/components/Background';
import {mainTheme} from './src/styles/mainTheme';
import color from "color";
import {BACKGROUND_COLOR} from "./src/styles/colors";
import {Routes} from "./src/Routes";
import {NativeBaseProvider, useToast} from 'native-base';
import React, {useEffect} from "react";
import {AuthProvider} from "./src/hooks/Auth.hooks";


export default function App() {
    return (
        <NativeBaseProvider>
            <ThemeProvider theme={mainTheme}>
                <AuthProvider>
                    <Background>

                        <StatusBar style="light" translucent={false}
                                   hidden={false}
                                   backgroundColor={color(BACKGROUND_COLOR).darken(0.5).hex()}/>
                        <Routes/>

                    </Background>
                </AuthProvider>
            </ThemeProvider>
        </NativeBaseProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
