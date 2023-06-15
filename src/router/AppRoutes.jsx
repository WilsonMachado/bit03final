import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Products } from '../containers/Products/Products'
import { Revenues } from '../containers/Revenues/Revenues'
import { Dashboard } from '../containers/Dashboard/Dashboard'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/bit03final' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/revenues' element={<Revenues />} />
    </Routes>
  )
}
