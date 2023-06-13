import React from 'react'

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useProSidebar } from 'react-pro-sidebar';

import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

export const AppHeader = () => {
  
    const { collapseSidebar, toggleSidebar, broken } = useProSidebar();
  
    return (
      <AppBar position='sticky' sx={styles.appBar}>
          <Toolbar>
            <IconButton onClick={() => broken ? toggleSidebar() : collapseSidebar()} color="secondary">
                <MenuIcon />
            </IconButton>
            <Box component='img' sx={styles.appLogo} src='https://d1csarkz8obe9u.cloudfront.net/posterpreviews/e-commerce-online-shop-design-template-aa02d6dc00d6567d0408bebdb3e5fab3.jpg'></Box>
            <Box sx={{flexGrow: 1}}/>
            <IconButton onClick={() => console.log('Logout')} color="secondary">
                <LogoutIcon />
            </IconButton>
          </Toolbar>
      </AppBar>
      )
}
        

/** @type {import("@mui/material")} */

const styles = {
    appBar: {
        bgcolor: 'neutral.main' 
    },
    appLogo: {
        borderRadius: 100,
        width: 0.03,
        ml: 5,
        mr: 5,
        cursor: 'pointer'
    }
}
