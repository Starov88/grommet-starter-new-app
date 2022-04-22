import React from 'react';
import { Box, Footer, Text, Anchor } from 'grommet';

import AppBar from '../app-bar';

import './main-layout.css';


const MainLayout = ({ children }) => {
    return (
        <Box flex height={{ min: "100%" }}>
            <AppBar />
            {children}
            <Footer background="brand" pad="medium">
                <Text>Copyright</Text>
                <Anchor label="About" />
            </Footer>
        </Box>
    );
}


export default MainLayout;