import {createTheme, Theme} from '@mui/material'

export const appTheme = createTheme({
  
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: '#4b1c64ff',
        },
        background: {
          default: '#ecececff',
          paper: '#dedcdfff',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          main: '#ccacf6ff',
        },
        background: {
          default: '#313131ff',
          paper: '#303030ff',
        },
      },
    },
  },
});

