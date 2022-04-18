import React, { useState } from 'react';
import {
    Box,
    Button,
    Grommet,
    Layer,
    ResponsiveContext
} from 'grommet';
import { FormClose } from 'grommet-icons';

import AppBar from './app-bar';
import AppSidebar from './app-sidebar';

import './layout.css';

const MainLayout = ({ theme, sidebar, children }) => {

    var [showSidebar, setShowSidebar] = useState(true);

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <AppBar onSidebarBtnClick={setShowSidebar} />

                        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>

                            {(!showSidebar || size !== 'small') ?
                                (
                                    <AppSidebar showSidebar={showSidebar}>
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
                                            {children}
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
                                                onClick={() => setShowSidebar(false)}
                                            />
                                        </Box>

                                    </Layer>
                                )
                            }

                            <Box flex className='app-content' pad="large">
                                {children}
                                {/* {React.Children.map(children, (child) => {
                                    return React.cloneElement(child, { showSidebar });
                                })} */}
                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}

export default MainLayout;