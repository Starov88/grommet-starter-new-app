import React from "react";

import { Stack, Image, Card, CardBody, Box, Heading, CardHeader, Text } from 'grommet';

import prouctImage from './Untitled.png';
import './product-item.css';

const ProductItem = ({ product }) => {
    return (
        <Card
            flex
            hoverIndicator
            onClick={(evt) => console.log(evt.currentTarget)}
            className="app-product-item"
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
                    className="app-product-item-header"
                    width="medium"
                    justify="start"
                >
                    <Box alignSelf="start">
                        <Heading level="3" alignSelf="start" margin={{ top: "xsmall", bottom: "medium" }}>
                            {product.title}
                        </Heading>
                        <Text weight="bold" size="medium">{`Название: ${product.name}`}</Text>
                        <Text size="medium">{`Тип: ${product.type}`}</Text>
                        <Text size="medium">{`Cостав: ${product.composition}`}</Text>
                        <Text size="medium">{`Диаметр: ${product.diameter}`}</Text>
                    </Box>
                </CardHeader>
            </Stack>
        </Card>
    );
}

export default ProductItem;