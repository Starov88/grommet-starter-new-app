import React, { useState } from 'react';
import {
    Box,
    Button,
    Collapsible,
    Heading,
    Grommet,
    Layer,
    ResponsiveContext,
} from 'grommet';
import { FormClose, BladesVertical } from 'grommet-icons';

import Test from '../test/test';
import AppBar from './app-bar';

const MainLayout = ({ theme, children }) => {

    var [showSidebar, setShowSidebar] = useState(false);

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>

                        <AppBar>
                            <Button
                                icon={<BladesVertical />}
                                onClick={() => setShowSidebar((sb) => !sb)}
                            />
                            <Heading level='3' margin='none'>Sweets & Flowers</Heading>
                        </AppBar>

                        <Box direction='row' flex overflow={{ horizontal: 'hidden' }}>

                            {(!showSidebar || size !== 'small') ? (
                                <Collapsible direction="horizontal" open={showSidebar}>
                                    <Box
                                        flex
                                        width='medium'
                                        background='light-2'
                                        elevation='small'
                                        align='center'
                                        justify='center'
                                    >
                                        sidebar
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
                                        sidebar
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

                            <Box flex align='center' justify='center'>
                                {children}
                            </Box>
                        </Box>
                    </Box>
                )}
            </ResponsiveContext.Consumer>
        </Grommet>
    );
}



export default MainLayout;