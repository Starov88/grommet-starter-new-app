import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions, sidebarActions } from '../../store';

import AppBar from "./app-bar";

const mapStateToProps = (state) => {
    return {
        showSidebar: state.showSidebar,
        enableSidebar: state.enableSidebar,
        userInfo: state.userInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    const { sidebarBtnClick } = bindActionCreators(sidebarActions, dispatch);
    const { onLogout } = bindActionCreators(authActions, dispatch);
    return {
        onSidebarBtnClick: sidebarBtnClick,
        onLogout
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);