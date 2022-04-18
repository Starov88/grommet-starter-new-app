import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../../store';
import { Box } from 'grommet';

import AppBar from '../app-bar';

import './main-layout.css';


const MainLayout = ({ children, showSidebar, sidebarBtnClick }) => {
    return (
        <Box fill>
            <AppBar onSidebarBtnClick={sidebarBtnClick} showSidebar={showSidebar} />
            {children}
        </Box>
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