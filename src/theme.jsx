import { createTheme } from '@material-ui/core/styles';

const baseTheme = {
  typography: {
    fontFamily: 'Circular, Helvetica, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
};

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'light',
    primary: {
      main: '#1DB954',
    },
    secondary: {
      main: '#191414',
    },
    background: {
      default: '#F5F5F5',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#121212',
      secondary: '#B3B3B3',
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: 'dark',
    primary: {
      main: '#1DB954',
    },
    secondary: {
      main: '#191414',
    },
    background: {
      default: '#191414',
      paper: '#282828',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
  },
});

export { lightTheme, darkTheme };
