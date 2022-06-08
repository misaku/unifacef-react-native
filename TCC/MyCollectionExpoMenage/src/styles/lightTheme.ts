import {DefaultTheme} from 'styled-components';
import {BACKGROUND_COLOR_WHITE, DANGER, PRIMARY, SECUNDARY_WHITE} from './colors';

const lightTheme: DefaultTheme = {
    measures:{
        radius: 8
    },
    colors: {
      primary: PRIMARY,
      secondary: SECUNDARY_WHITE,
      background: BACKGROUND_COLOR_WHITE,
      danger: DANGER,
    }
};

export { lightTheme };
