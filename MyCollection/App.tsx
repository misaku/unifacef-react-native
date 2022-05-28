import { StatusBar } from 'expo-status-bar';

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
import {MyThemeProvider, useMyTheme} from "./src/hooks/Theme.hooks";

function AppChild() {
  const {theme} = useMyTheme()
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <StatusBar style="light" translucent={false} backgroundColor={color(theme.colors.background).darken(0.5).hex()}/>
        <Listagem />
      </Background>
    </ThemeProvider>
  );
}

export default function App() {
  return (<MyThemeProvider>
    <AppChild />
  </MyThemeProvider>)
}

