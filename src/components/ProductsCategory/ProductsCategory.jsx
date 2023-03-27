import React from 'react'
import { Grid, Card, CardHeader, CardMedia } from '@material-ui/core';
import PhonesAndTabletsImage from '../../assets/design_startframe__cffzwjeyro2q_large-removebg-preview 1.svg';
import AccessoriesImage from '../../assets/image 22.svg';
import LaptopsImage from '../../assets/image 21.svg';

const products = [
    {
        name: 'Phones & Tablets',
        imageUrl: PhonesAndTabletsImage
        },
        {
        name: 'Accessories',
        imageUrl: AccessoriesImage
        },
        {
        name: 'Laptops',
        imageUrl: LaptopsImage
        }
];

const ProductsCategory = () => {
    return (
        <Grid container spacing={2}>
            {products.map((product) => (
            <Grid item xs={4} key={product.name}>
                <Card style={{
                    marginTop: '30px',
                    height: '350px'
                }}>
                <CardHeader title={product.name} />
                <CardMedia
                    component="img"
                    image={product.imageUrl}
                    title={product.name}
                    style={{ height: '200px', width: '100%', objectFit: 'contain', marginTop: '40px' }}
                />
                </Card>
            </Grid>
            ))}
        </Grid>
        );
    };


export default ProductsCategory