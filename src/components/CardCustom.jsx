import { Card, CardContent, Typography, Box } from '@mui/material'
import React from 'react'

export const CardCustom = (props) => {
  return (
    <Card>
        <CardContent>
            <Typography variant='cardTitle'>Título de la card</Typography>  
            <Box sx={styles.principalCardContainer}>

                <Box sx={styles.cardImage} component={'img'} src='https://placehold.co/600x400'></Box>
                <Typography sx={styles.cardTitle}>Título de la card</Typography>
            </Box>
            <Box sx={styles.cardDescription}>
            <Typography variant='h7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora earum dignissimos mollitia vel asperiores, et laudantium hic sunt. Facilis delectus minima molestias qui officia enim alias dolorem assumenda maxime eligendi?</Typography>
            </Box>
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
        position: 'absolute',
        bottom: 0,
        color: 'neutral,light',
        left: 0,
        right: 0,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '1rem',
        mb: 2
    },
    cardDescription: {
        mt: 2,
        mb: 2
    }
  }