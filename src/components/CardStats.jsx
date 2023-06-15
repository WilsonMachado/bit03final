import { Card, CardContent, Typography, Box, Divider } from '@mui/material'
import React from 'react'

import { ColorText } from './ColorText'

export const CardStats = ({totalProducts, averagePrice, totalOrders, totalRevenue}) => {
  return (
    <Card>
        <CardContent>
            <Typography variant='cardTitle' sx={styles.cardTitle}>Store analytics</Typography>  
            
            <Typography variant='h4'>{totalProducts}</Typography>  
            <Typography variant='h6'><ColorText color={'neutral.normal'}>Number of products in store</ColorText></Typography>
            
            <Divider sx={styles.divider}/>
            
            <Typography variant='h4'>${averagePrice}</Typography>  
            <Typography variant='h6'><ColorText color={'neutral.normal'}>Average price of products</ColorText></Typography>  
            
            <Divider sx={styles.divider}/>
            
            <Typography variant='h4'>{totalOrders}</Typography>  
            <Typography variant='h6'><ColorText color={'neutral.normal'}>Total number of orders placed</ColorText></Typography>  
            
            <Divider sx={styles.divider}/>
            
            <Typography variant='h4'>${totalRevenue}</Typography>  
            <Typography variant='h6'><ColorText color={'neutral.normal'}>Total revenues generated</ColorText></Typography>  
            
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