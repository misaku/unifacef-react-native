import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import { Background } from './src/components/Background';
import { mainTheme } from './src/styles/mainTheme';
import color from "color";
import {BACKGROUND_COLOR} from "./src/styles/colors";
import {Login} from "./src/pages/Login";
import {Cadastro} from "./src/pages/Cadastro";
import {Perfil} from "./src/pages/Perfil";
import {Detalhes} from "./src/pages/Detalhes";
import {Carrinho} from "./src/pages/Carrinho";
import {Listagem} from "./src/pages/Listagem";

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Background>
        <StatusBar style="light" translucent={false} backgroundColor={color(BACKGROUND_COLOR).darken(0.5).hex()}/>
        <Listagem />
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
