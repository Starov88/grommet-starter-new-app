import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../../store';

import AppBar from "./app-bar";

const mapStateToProps = (state) => {
    return {
        showSidebar: state.showSidebar,
        enableSidebar: state.enableSidebar
    };
}

const mapDispatchToProps = (dispatch) => {
    const { sidebarBtnClick } = bindActionCreators(sidebarActions, dispatch);
    return {
        onSidebarBtnClick: sidebarBtnClick,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);