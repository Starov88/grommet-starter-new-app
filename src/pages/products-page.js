import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../store';
import { withResponsiveContext } from '../hoc';

import ProductGrid from '../components/product-grid';
import AppContent from '../components/app-content';
import AppSidefilter from '../components/app-sidefilter';

const ProductsPage = ({ applyFilterBtnClick, setSidebarState, size }) => {

    setSidebarState({
        show: size !== 'small' ? true : false,
        enable: true
    });

    return (
        <AppContent sidebar={<AppSidefilter />}>
            <ProductGrid />
        </AppContent>
    )
}

const mapDispatchToProps = (dispatch) => {
    const { setSidebarState } = bindActionCreators(sidebarActions, dispatch);
    return {
        setSidebarState
    }
}

export default withResponsiveContext(connect(null, mapDispatchToProps)(ProductsPage));
