import { ThemeProvider, Box, CssBaseline } from '@mui/material';
import React from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css'

import { AppHeader } from './components/AppHeader';
import { SideNav } from './components/SideNav';
import { ProSidebarProvider } from 'react-pro-sidebar';
import theme from './config/theme';

function App() { 

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
        <CssBaseline />
        <AppHeader />
        <Box sx={styles.container}>
          <SideNav />
          <Box component={'main'} sx={styles.mainSection}>            
          </Box>
        </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

/** @type {import("@mui/material")} */

const styles = {
  container: {
      display: 'flex',
      bgcolor: 'neutral.light',
      height: 'calc(100% - 64px)' 
  },
  mainSection:{
    p: 1,
    width: '100%',
    height: '100%',
    overflow: 'auto'
  }
  
}


export default App;

