import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productPageActions } from '../store';

import ProductGrid from '../components/product-grid';
import AppContent from '../components/app-content';
import AppSidefilter from '../components/app-sidefilter';

const ProductsPage = ({ productFilter, applyFilterBtnClick }) => {

    return (
        <AppContent sidebar={<AppSidefilter onFilterConfirm={(data) => { applyFilterBtnClick(data) }} />}>
            <ProductGrid filter={productFilter} />
        </AppContent>
    )
}

const mapStateToProps = (state) => {
    return {
        productFilter: state.productFilter
    };
}

const mapDispatchToProps = (dispatch) => {
    const { applyFilterBtnClick } = bindActionCreators(productPageActions, dispatch);
    return {
        applyFilterBtnClick
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsPage);