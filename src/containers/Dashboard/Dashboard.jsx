import { Box,  Typography } from '@mui/material'
import React from 'react'

import { CardCustom } from '../../components/CardCustom' 

export const Dashboard = () => {
  return (
      <>
      <Typography sx={styles.pageTitle} variant='h5'>Dashboard</Typography>
      <Typography sx={styles.pageSubtitle} variant='h6'>Top products</Typography>
      
      <Box sx={styles.columnContainer}>

        <Box sx={styles.item}>        
            <CardCustom />
        </Box>
        <Box sx={styles.item}>        
            <CardCustom />
        </Box>
        <Box sx={styles.item}>        
            <CardCustom />
        </Box>
        
             

      </Box>
      
      </>
    
    )
}

/** @type {import("@mui/material")} */

const styles = {
    pageTitle: {
        mb: 2
    },
    pageSubtitle: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },   
    columnContainer: {
        columns: '280px 3',
        maxWidth: 1440,
        mt: 2,
        justifyContent: 'center',
        

    },
    item: {
        mb: 2
    }
  }