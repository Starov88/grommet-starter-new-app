import React from 'react';
import { Box, Button, Layer } from 'grommet';
import { FormClose } from 'grommet-icons';

import AppSidebar from '../app-sidebar';

import './app-content.css';

const AppContent = ({ sidebar, sidebarBtnClick, showSidebar, size, children }) => {
    return (
        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>

            {(!showSidebar || size !== 'small') ?
                (
                    <AppSidebar>
                        {sidebar}
                    </AppSidebar>
                ) :
                (
                    <Layer>
                        <Box
                            fill
                            background='light-2'
                            align='center'
                            justify='center'
                        >
                            {sidebar}
                        </Box>
                        <Box
                            background='light-2'
                            tag='header'
                            justify='end'
                            align='center'
                            direction='row'
                        >
                            <Button
                                icon={<FormClose />}
                                onClick={() => sidebarBtnClick(false)}
                            />
                        </Box>

                    </Layer>
                )
            }

            <Box flex className='app-content' pad="large">
                {children}
            </Box>
        </Box>
    )
}

export default AppContent;
