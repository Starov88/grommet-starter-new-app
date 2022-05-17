import React from "react";
import { useNavigate } from "react-router-dom";

import { Stack, Image, Card, CardBody, Box, Heading, CardHeader, Text } from 'grommet';

//import prouctImage from './Untitled.png';
import './product-item.css';

const ProductItem = ({ product, history }) => {

    const navigate = useNavigate();

    return (
        <Card
            flex
            hoverIndicator
            onClick={(evt) => { console.log(evt.currentTarget); navigate(`/products/${product.id}`) }}
            className="app-product-item"
            width="medium"
            justify="center"
            background="light-1"
        >
            {/* Stacked CardBody and CardHeader on top of each other
             in that order */}
            <Stack anchor="bottom-left">
                <CardBody height="medium">
                    <Image
                        fit="cover"
                        src={`../images/${product.mainImageUrl}`}
                        a11yTitle="scuba diving"
                    />
                </CardBody>
                <CardHeader
                    pad={{ horizontal: 'small', vertical: 'small' }}
                    // https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4#all-hex-value-from-100-to-0-alpha
                    background={{ color: 'brand-1', opacity: 0.4 }}
                    className="app-product-item-header"
                    width="medium"
                    justify="start"
                >
                    <Box alignSelf="start" width="medium">
                        <Heading level="3" alignSelf="start" margin={{ top: "xsmall", bottom: "medium" }} color="brand">
                            {product.name}
                        </Heading>
                        {/* <Text weight="bold" size="medium" color="brand">{<i>{`Title: ${product.title}`}</i>}</Text> */}
                        <Text size="medium" color="brand">{`Тип: ${product.type}`}</Text>
                        <Text size="medium" color="brand">{`Cостав: ${product.composition}`}</Text>
                        <Text size="medium" color="brand">{`Диаметр: ${product.diameter}`}</Text>
                        <Text size="medium" color="brand">{`Описание: ${product.description}`}</Text>
                        {/* <AppLink to={`${product.id}`} icon={<Notes />}>Details</AppLink> */}
                    </Box>

                </CardHeader>
            </Stack>
        </Card>
    );
}

export default ProductItem;