import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../../store';
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

const MainLayout = ({ theme, sidebar, children, showSidebar, sidebarBtnClick }) => {

    return (
        <Grommet theme={theme} full>
            <ResponsiveContext.Consumer>
                {size => (
                    <Box fill>
                        <AppBar onSidebarBtnClick={sidebarBtnClick} showSidebar={showSidebar} />

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

const mapStateToProps = (state) => {
    return {
        showSidebar: state.showSidebar
    };
}

const mapDispatchToProps = (dispatch) => {
    const { sidebarBtnClick } = bindActionCreators(sidebarActions, dispatch);
    return {
        sidebarBtnClick
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainLayout);