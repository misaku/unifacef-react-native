import {DefaultTheme} from 'styled-components';
import {BACKGROUND_COLOR_WHITE, DANGER, PRIMARY, SECONDARY_WHITE} from './colors';

const lightTheme: DefaultTheme = {
    measures:{
        radius: 8
    },
    colors: {
      primary: PRIMARY,
      secondary: SECONDARY_WHITE,
      background: BACKGROUND_COLOR_WHITE,
      danger: DANGER,
    }
};

export { lightTheme };
