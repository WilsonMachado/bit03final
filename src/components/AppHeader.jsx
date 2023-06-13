import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';

export const AppHeader = () => {
  return (
      <AppBar position='sticky' sx={styles.appBar}>
          <Toolbar>
            <IconButton onClick={() => console.log('Abriendo menú')} color="secondary">
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
