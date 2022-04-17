import React, { useState } from 'react';
import {
    Box,
    Button,
    Collapsible,
    Heading,
    Grommet,
    Layer,
    ResponsiveContext,
    Sidebar,
    SidebarHeader,
    SidebarFooter
} from 'grommet';
import { FormClose, BladesVertical } from 'grommet-icons';

import Test from '../test/test';
import AppBar from './app-bar';
import AppSidebar from './app-sidebar';

const MainLayout = ({ theme, sidebar, children }) => {

    var [showSidebar, setShowSidebar] = useState(true);

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>

                        <AppBar onSidebarBtnClick={setShowSidebar} />


                        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>

                            {(!showSidebar || size !== 'small') ? (
                                <Collapsible direction="horizontal" open={showSidebar}>
                                    <Box direction="row" height={{ min: '100%' }}>
                                        <AppSidebar>
                                            {sidebar}
                                        </AppSidebar>
                                    </Box>
                                </Collapsible>
                            ) : (
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
                                            onClick={() => setShowSidebar((sb) => !sb)}
                                        />
                                    </Box>

                                </Layer>
                            )}

                            <Box flex pad="large" justify='center'>
                                {React.Children.map(children, (child) => {
                                    return React.cloneElement(child, { showSidebar });
                                })}
                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}



export default MainLayout;