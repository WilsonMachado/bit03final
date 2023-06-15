import { Box,  Typography } from '@mui/material'
import React from 'react'

import { CardCustom } from '../../components/CardCustom' 
import { CardStats } from '../../components/cardStats'
import { RealtimeChart } from '../../components/RealtimeChart'

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
        <Box sx={styles.item}>        
            <CardCustom />
        </Box>
      </Box>
      
      <Typography sx={styles.pageSubtitle} variant='h6'>Analytics</Typography>

      <Box sx={styles.columnContainerStats}>

        <Box sx={styles.item}>        
            <RealtimeChart />
        </Box>       
        
        <Box sx={styles.item}>        
            <CardStats />
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
        columns: '300px 4',
        maxWidth: 1600,
        mt: 2,
        justifyContent: 'center', 

    },
    columnContainerStats: {
        columns: '300px 2',
        maxWidth: 1600,
        mt: 2,
        justifyContent: 'center', 

    },
    item: {
        mb: 2
    },
    
  }