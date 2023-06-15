import { Card, CardContent, Typography, Box, Divider } from '@mui/material'
import React from 'react'

import { ColorText } from './ColorText'
import { green } from '@mui/material/colors'

export const CardStats = (props) => {
  return (
    <Card>
        <CardContent>
            <Typography variant='cardTitle' sx={styles.cardTitle}>Product analytics</Typography>  
            
            <Typography variant='h4'>4,576</Typography>  
            <Typography variant='h6'><ColorText color={'neutral.normal'}>Number of products in store</ColorText></Typography>  
            
            <Divider sx={styles.divider}/>
            
            <Typography variant='h4'>4,576</Typography>  
            <Typography variant='h6'><ColorText color={'neutral.normal'}>Best selling product in the store</ColorText></Typography>  
            
            <Divider sx={styles.divider}/>
            
            <Typography variant='h4'>4,576</Typography>  
            <Typography variant='h6'><ColorText color={'neutral.normal'}>Average price of products</ColorText></Typography>  
            
        </CardContent>
    </Card>
  )
}

/** @type {import("@mui/material")} */

const styles = {
    principalCardContainer: {
         width: '100%',
         position: 'relative',
         mt: 2
    },   
    cardImage: {
        width: '100%',
        mt: 1,
        filter: 'bridhtness(20%)',
        display: 'block',
        borderRadius: 5
    },
    cardTitle: {        
        mb: 2
    },
    cardDescription: {
        mt: 2,
        mb: 2
    },

    divider: {
        my: 2
    }
  }