import React from 'react';

import { Box, Card, CardBody, CardFooter, CardHeader, Text } from 'grommet';


const Test = () => {

    return (
        <Card pad="small" gap="medium" background="light-1">
            <CardHeader>header</CardHeader>
            <CardBody>body</CardBody>
            <CardFooter>footer</CardFooter>
        </Card>
    );
}

export default Test;