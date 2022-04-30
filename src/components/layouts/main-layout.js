import React from 'react';
import { Box, Footer, Text, Anchor, Main, PageContent } from 'grommet';

import AppBar from '../app-bar';

import './main-layout.css';

const MainLayout = ({ children }) => {

    return (
        <Box flex
            height={{ min: "100vh" }}
            background="light-1"
        >
            <AppBar />
            <Main>
                <PageContent height={{ min: "100vh" }}>
                    {children}
                </PageContent>
            </Main>
            <Footer background="brand" pad="medium">
                <Text>Copyright</Text>
                <Anchor label="About" />
            </Footer>
        </Box>
    );
}

export default MainLayout;