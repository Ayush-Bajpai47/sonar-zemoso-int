import { createTheme, responsiveFontSizes } 
from '@material-ui/core/styles';
import '@fontsource/inter'
  
const theme = responsiveFontSizes(createTheme({
  spacing: 4,
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
  },
  palette: {
    primary: {
      main: '#224DFF',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#D72A2A',//red
    },
    warning: {
      main: '#FC7B09',//orange
    },
    info: {
      main: '#6B7D6A',//gray
    },
    success: {
      main: '#09FE00',//green
    },
    text: {
      primary: '#2C2C2E;',//black
      secondary: '#696A6E',//white
    },
  },
}));
  
  
export default theme;