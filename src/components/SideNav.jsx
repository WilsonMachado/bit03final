import { Box, Typography, useTheme, Avatar } from '@mui/material'
import React from 'react'
import { Menu, MenuItem, Sidebar } from 'react-pro-sidebar'

import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const SideNav = () => {
  
  const theme = useTheme();
  
  return (
    <Sidebar  style={
      {
        height: '100%',
        top:'auto',

      }
    }
    
    breakPoint='md'
    backgroundColor={theme.palette.neutral.light}>
      <Box sx={styles.avatarContainer}>
        <Avatar sx={styles.avatar} alt='user'src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'/>
        <Typography variant='overline' sx={styles.userName}>Wilson Machado</Typography>
        <Typography variant='body2'>Administrator</Typography>
      </Box>
      <Menu>
        <MenuItem active icon={<DashboardIcon/>}>
          <Typography variant='body2'>Dashboard</Typography>
        </MenuItem>
        <MenuItem active icon={<InventoryIcon/>}>
          <Typography variant='body2'>Products</Typography>
        </MenuItem>
        <MenuItem active icon={<AttachMoneyIcon/>}>
          <Typography variant='body2'>Revenues</Typography>
        </MenuItem>
      </Menu>
    </Sidebar>
  )
}

/** @type {import("@mui/material")} */

const styles = {
  avatarContainer: {
     display: 'flex',
     alignItems: 'center',
     flexDirection: 'column',
     my: 5     
  },
  avatar:{
    width: '60%',
    height: 'auto',
  },
  userName: {
    mt: 2,
    fontSize: 20
  }
  
}
