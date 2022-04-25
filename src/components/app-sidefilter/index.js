import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productPageActions } from '../../store';
import { withResponsiveContext } from '../../hoc';

import AppSidefilter from "./app-sidefilter";

const mapDispatchToProps = (dispatch) => {
    const { applyFilterBtnClick, sidebarBtnClick } = bindActionCreators(productPageActions, dispatch);
    return {
        onFilterConfirm: applyFilterBtnClick,
        sidebarBtnClick
    }
}

export default withResponsiveContext(connect(null, mapDispatchToProps)(AppSidefilter));