import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { filterActions } from '../../store';
import { withResponsiveContext } from '../../hoc';

import AppSidefilter from "./app-sidefilter";

const mapDispatchToProps = (dispatch) => {
    const { onFilterConfirm } = bindActionCreators(filterActions, dispatch);
    return {
        onFilterConfirm
    }
}

export default withResponsiveContext(connect(null, mapDispatchToProps)(AppSidefilter));