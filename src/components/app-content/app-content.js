import React from 'react';
import { Box } from 'grommet';

import './app-content.css';
import AppSidebar from '../app-sidebar';

const AppContent = ({ sidebar, children }) => {
    return (
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>
            <AppSidebar>
                {sidebar}
            </AppSidebar>
            <Box flex className='app-content' pad="large">
                {children}
            </Box>
        </Box>
    )
}

export default AppContent;
