import React from "react";

import { Grid } from 'grommet';

import ProductItem from "../product-item";

import './product-grid.css';

const ProductGrid = (props) => {

    var num = 1;

    var data = ["", "", "", "", "", "", ""];

    return (
        <Grid flex fill
            className='product-grid'
            gap="large"
            rows="medium"
            justifyContent="center"
            columns={{ count: 'fill', size: ['small', 'medium'] }}
        >
            {props.children}
        </Grid>
    );
}

export default ProductGrid;