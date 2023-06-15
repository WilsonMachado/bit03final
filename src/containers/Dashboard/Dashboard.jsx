import { Box,  Typography } from '@mui/material'
import React from 'react'
import { useEffect, useState } from 'react';

import { CardCustom } from '../../components/CardCustom' 
import { CardStats } from '../../components/cardStats'
import { RealtimeChart } from '../../components/RealtimeChart'

export const Dashboard = () => {

    const [totalProducts, setTotalProducts] = useState(0);
    const [averagePrice, setAveragePrice] = useState(0);
    const [bestSellingProducts, setBestSellingProducts] = useState([]);

    const [totalOrders, setTotalOrders] = useState(0);
    const [totalRevenue, setTotalRevenue] = useState(0);

  useEffect(() => {
  
    fetch('https://fakestoreapi.com/products')                      
      .then(response => response.json())
      .then(data => {
            setTotalProducts(data.length);                                                                 //! Número total de productos en la tienda
            
            const prices = data.map(product => product.price);
            const sum = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
            const avg = sum / prices.length;
            setAveragePrice(avg.toFixed(2));                                                               //! Precio promedio de productos en la tienda
    
        }
      
      )
      .catch(error => console.log(error));
      
    
    
    fetch('https://fakestoreapi.com/products?sort=desc&limit=4')    
    .then(response => response.json())
    .then(data => setBestSellingProducts(data))                                                            //! Productos más vendidos
    .catch(error => console.log(error));
    
    
    fetch('https://fakestoreapi.com/carts')
      .then(response => response.json())
      .then(data => {
      
        setTotalOrders(data.length);                                                                      //! Número total de pedidos
      
        let revenue = 0;

        data.forEach(cart => {
          cart.products.forEach(async product => {
            const productData = await fetch(`https://fakestoreapi.com/products/${product.productId}`);    
            const productInfo = await productData.json();
            const productPrice = productInfo.price;
            const productQuantity = product.quantity;
            revenue += productPrice * productQuantity;
            setTotalRevenue(revenue.toFixed(2));                                                          //! Ganancias totales (con base en los pedidos)
          });
        });
        
        })
      
        .catch(error => console.log(error));

  
    }, []);

  return (
      <>
      <Typography sx={styles.pageTitle} variant='h5'>Dashboard</Typography>
      <Typography sx={styles.pageSubtitle} variant='h6'>Best selling products</Typography>
      
      <Box sx={styles.columnContainer}>

        {bestSellingProducts.map((product) => (
            <Box sx={styles.item}>
                <CardCustom
                key={product.id}
                productName={product.title}
                productImage={product.image}
                productDescription={product.description}
                productPrice={''}
                />
            </Box>
        ))}        
        
      </Box>
      
      <Typography sx={styles.pageSubtitle} variant='h6'>Analytics</Typography>

      <Box sx={styles.columnContainerStats}>

        <Box sx={styles.item}>
            <Typography sx={styles.chartTitle} variant='h6'>Total Customers</Typography>       
            <RealtimeChart />
            <Typography sx={styles.chartTitle} variant='h6'>Total Sellers</Typography>         
            <RealtimeChart />
        </Box>       
        
        <Box sx={styles.item}>        
            <CardStats totalProducts={totalProducts} averagePrice={averagePrice} totalOrders={totalOrders} totalRevenue={totalRevenue}/>
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
        mx: 'auto',
        mt: '20px',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },   
    chartTitle: {
        fontSize: '0.8rem',
        mt: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center'
    },   
    columnContainer: {
        columns: '280px 4',
        alignItems: 'center',
        justifyContent: 'center',
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