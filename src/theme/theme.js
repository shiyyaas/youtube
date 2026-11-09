import { createTheme } from '@mui/material/styles';

/**
 * YouTube Clone Custom MUI Dark Theme
 * Matches YouTube dark mode color palette (#0F0F0F base, #212121 card/surface, #CC0000 brand red)
 */
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#FF0000', // YouTube red
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#3EA6FF', // YouTube verified link blue
    },
    background: {
      default: '#0F0F0F', // YouTube true dark background
      paper: '#1F1F1F',   // YouTube card & elevated surface
    },
    text: {
      primary: '#F1F1F1',
      secondary: '#AAAAAA',
    },
    divider: '#272727',
  },
  typography: {
    fontFamily: [
      'Roboto',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Arial',
      'sans-serif',
    ].join(','),
    h6: {
      fontWeight: 600,
      fontSize: '1.1rem',
      lineHeight: 1.3,
    },
    subtitle1: {
      fontSize: '0.95rem',
      fontWeight: 500,
    },
    body2: {
      fontSize: '0.825rem',
      color: '#AAAAAA',
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0F0F0F',
          color: '#F1F1F1',
          overflowX: 'hidden',
          scrollbarColor: '#717171 #0F0F0F',
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: 8,
            height: 8,
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#717171',
            borderRadius: 4,
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: '#0F0F0F',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 20,
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.875rem',
          backgroundColor: '#272727',
          color: '#F1F1F1',
          '&:hover': {
            backgroundColor: '#383838',
          },
        },
      },
    },
  },
});

export default theme;
