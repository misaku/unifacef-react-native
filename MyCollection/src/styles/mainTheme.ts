import {DefaultTheme} from 'styled-components';
import {BACKGROUND_COLOR, DANGER, PRIMARY, SECONDARY} from './colors';

const mainTheme: DefaultTheme = {
    measures:{
        radius: 8
    },
    colors: {
      primary: PRIMARY,
      secondary: SECONDARY,
      background: BACKGROUND_COLOR,
      danger: DANGER,
    }
};

export { mainTheme };
