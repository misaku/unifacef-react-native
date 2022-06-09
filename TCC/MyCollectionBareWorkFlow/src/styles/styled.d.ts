import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        measures:{
          radius: number
        },
        colors: {
            primary: string;
            secondary: string;
            background: string;
        };
    }
}
