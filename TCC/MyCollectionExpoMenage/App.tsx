import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import { Background } from './src/components/Background';
import { mainTheme } from './src/styles/mainTheme';
import color from "color";
import {BACKGROUND_COLOR} from "./src/styles/colors";
import {Routes} from "./src/Routes";

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Background>
        <StatusBar style="light" translucent={false} backgroundColor={color(BACKGROUND_COLOR).darken(0.5).hex()}/>
        <Routes />
      </Background>
    </ThemeProvider>
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
