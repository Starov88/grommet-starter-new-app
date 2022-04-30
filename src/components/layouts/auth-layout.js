import React from 'react';
import { Box, Grid, Image } from 'grommet';


import './auth-layout.css';

const AuthLayout = ({ children }) => {
    return (
        <Grid flex height="100vh"
            areas={
                [
                    { name: 'brand-image', start: [0, 0], end: [1, 0] },
                    { name: 'form-area', start: [1, 0], end: [2, 0] }
                ]
            }
            columns={['flex', 'flex']}
            rows={['flex']}
        >
            <Box gridArea="brand-image" background="brand" align="center"
            >
                <Image
                    width="50%"
                    fit="contain"
                    src={`../images/logo/logo-web.png`}
                    a11yTitle="scuba diving"
                />

            </Box>
            <Box gridArea="form-area" pad="large">
                {children}
            </Box>
        </Grid>
    );
}


export default AuthLayout;