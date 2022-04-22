import AppSidebar from "./app-sidebar";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../../store';
import { withResponsiveContext } from '../../hoc';

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

export default withResponsiveContext(connect(mapStateToProps, mapDispatchToProps)(AppSidebar));