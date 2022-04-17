import React from "react";
import { Grid } from 'grommet';

import { useGetAllData } from '../../hoc';
import { cakeService } from '../../services';

import ProductItem from "../product-item";

import './product-grid.css';

const ProductGrid = ({ filter }) => {

    const { data, loading, error } = useGetAllData(cakeService, filter);

    if (loading && !error) {
        return (
            <p>loading</p>
        );
    }

    if (error) {
        return (
            <p>{error}</p>
        );
    }

    const items = data.map((item) => {
        return (
            <ProductItem key={item.id} product={item} />
        );
    });

    return (
        <Grid flex fill
            className='product-grid'
            gap="large"
            rows="medium"
            justifyContent="center"
            columns={{ count: 'fill', size: ['small', 'medium'] }}
        >
            {items}
        </Grid>
    );
}

export default ProductGrid;