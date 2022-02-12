import { createTheme } from "@mui/system";
import {cyan, purple, pink} from "@mui/material/colors";

declare module "@mui/material/styles" {
  interface Theme {
    spacing: number;
    primary: {
      main: string;
    };
    secondary: {
        main: string;
    },
    error: {
        main: string;
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    spacing?: number;
    primary?: {
      main?: string;
    };
    secondary?: {
        main?: string;
    },
    error?: {
        main?: string;
    }
  }
}

const primaryMain: string= pink[400];
const secondaryMain: string= pink[200];
// const background: string= purple[700]; //TODO: implement background color
const warning: string= cyan[200];

const theme = createTheme({
  spacing: 8,
  palette: {
    primary: {
        main: primaryMain,
    },    
    secondary: {
        main: secondaryMain,
    },
    error: {
        main: warning,
    },
  },
});

export default theme;