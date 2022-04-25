import React from 'react';
import { Box } from 'grommet';

import './app-content.css';
import AppSidebar from '../app-sidebar';

const AppContent = ({ sidebar, children }) => {
    let appSidebar = null;
    if (sidebar) {
        appSidebar = (
            <AppSidebar>
                {sidebar}
            </AppSidebar>
        )
    }

    return (
        <Box direction='row' flex>
            {appSidebar}
            <Box flex className='app-content' pad="large">
                {children}
            </Box>
        </Box>
    )
}

export default AppContent;
