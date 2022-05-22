import { DefaultTheme } from 'styled-components';
import { BACKGROUND_COLOR, PRIMARY, SECUNDARY } from './colors';

const mainTheme: DefaultTheme = {
    measures:{
        radius: 8
    },
    colors: {
      primary: PRIMARY,
      secondary: SECUNDARY,
      background: BACKGROUND_COLOR,
    }
};

export { mainTheme };
