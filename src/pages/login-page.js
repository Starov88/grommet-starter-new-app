import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../store';

import AppContent from '../components/app-content';
import { AppLogin } from '../components/auth';

const LoginPage = ({ setSidebarState }) => {

    setSidebarState({
        enable: false
    });

    return (
        <AppContent>
            <AppLogin />
        </AppContent>
    )
}


const mapDispatchToProps = (dispatch) => {
    const { setSidebarState } = bindActionCreators(sidebarActions, dispatch);
    return {
        setSidebarState
    }
}

export default connect(null, mapDispatchToProps)(LoginPage);
