import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productPageActions } from '../../store';

import AppSidefilter from "./app-sidefilter";

const mapDispatchToProps = (dispatch) => {
    const { applyFilterBtnClick } = bindActionCreators(productPageActions, dispatch);
    return {
        onFilterConfirm: applyFilterBtnClick
    }
}

export default connect(null, mapDispatchToProps)(AppSidefilter);