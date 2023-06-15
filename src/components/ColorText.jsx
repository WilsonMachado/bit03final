import React from 'react'

import { Box } from '@mui/material'

export const ColorText = ({color, children}) => {
  return (
    <Box sx={{ color }} component='span'>{children}</Box>
  )
}
