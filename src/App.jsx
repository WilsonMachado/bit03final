import { ThemeProvider, Box, CssBaseline } from '@mui/material';
import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import { AppHeader } from './components/AppHeader';
import { SideNav } from './components/SideNav';

import theme from './config/theme';

function App() { 

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppHeader />
        <Box>
          <SideNav />
          <Box component={'main'}>
            
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;

