import React from "react";
import { Grid, Box, Image } from "grommet";
import { cakeService } from '../../services';
import { useGetSingleData } from "../../hoc";

import "./product-details.css";

const ProductDetails = ({ id }) => {

    const { data, loading, error } = useGetSingleData(cakeService, id);

    if (loading && !error) {
        return (
            <p>loading...</p>
        );
    }

    if (error) {
        return (
            <p>{error}</p>
        );
    }

    return (
        <Grid flex
            areas={
                [
                    { name: 'image', start: [0, 0], end: [2, 0] },
                    { name: 'main-info', start: [2, 0], end: [3, 0] },
                    { name: 'description', start: [0, 1], end: [3, 1] },
                ]
            }
            columns={['flex', 'flex', 'flex', 'flex']}
            rows={['flex', 'flex']}
            gap="small"
        >
            <Box gridArea="image"
                background="brand"
                height={{ max: '700px' }}
            >
                <Image
                    fit="contain"
                    src={`../images/${data.mainImage}`}
                    a11yTitle="scuba diving"
                />
            </Box>
            <Box gridArea="main-info" background="brand">main-info</Box>
            <Box gridArea="description" background="brand">description</Box>
        </Grid>
    );
}

export default ProductDetails;

