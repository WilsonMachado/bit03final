import { Box,  Typography } from '@mui/material'
import React from 'react'

export const Dashboard = () => {
  return (
      <>
      <Typography sx={StyleSheet.pageTitle} variant='h5'>Dashboard</Typography>
      
      <Box sx={styles.columnContainer}>



      </Box>
      
      </>
    
    )
}

/** @type {import("@mui/material")} */

const styles = {
    pageTitle: {
        mb: 2 
    },   
    columnContainer: {
        columns: '280px 3',
        maxWidth: 1440
    }
  }