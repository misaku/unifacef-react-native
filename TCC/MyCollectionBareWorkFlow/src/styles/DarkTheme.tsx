import { DARKBACKGROUND, PRIMARY, SECUNDARY } from "./colors";
import {DefaultTheme} from "styled-components";

export const DarkTheme: DefaultTheme = {
    colors:{
        background: DARKBACKGROUND,
        primary: PRIMARY,
        secondary: SECUNDARY
    },
    measures: {
        radius: 8
    }
};
