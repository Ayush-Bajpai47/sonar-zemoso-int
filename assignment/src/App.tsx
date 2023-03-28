import React from 'react';

import { ThemeProvider } from '@material-ui/styles';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './Component/Pages/CandidateINfo/Candidate';

import theme from './Component/Theme/theme';

function App() {
  return (
    <div className="App">
  <ThemeProvider theme={theme}>
     <Index/>
    
     </ThemeProvider>
    </div>
  );
}

export default App;
