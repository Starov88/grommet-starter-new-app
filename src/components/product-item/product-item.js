import React from "react";

import { Stack, Image, Card, CardBody, Box, Heading, CardHeader, Text } from 'grommet';

import prouctImage from './Untitled.png';
import './product-item.css';

const ProductItem = ({ product }) => {
    return (
        <Card
            flex
            hoverIndicator
            onClick={(evt) => console.log(evt)}
            className="product-item"
            width="medium"
            justify="center"
        >
            {/* Stacked CardBody and CardHeader on top of each other
             in that order */}
            <Stack anchor="bottom-left">
                <CardBody height="medium">
                    <Image
                        fit="cover"
                        src={prouctImage}
                        a11yTitle="scuba diving"
                    />
                </CardBody>
                <CardHeader
                    pad={{ horizontal: 'small', vertical: 'small' }}
                    // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
                    background={{ color: 'brand2', opacity: 0.5 }}

                    width="medium"
                    justify="start"
                >
                    <Box>
                        <Heading level="3" margin="none">
                            {product.title}
                        </Heading>
                        <Text size="small">{product.name}</Text>
                    </Box>
                </CardHeader>
            </Stack>
        </Card>
    );
}

export default ProductItem;