import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { productPageActions } from '../store';

import ProductGrid from '../components/product-grid';
import MainLayout from '../components/layouts/main-layout';
import AppSidefilter from '../components/app-sidefilter';

const ProductsPage = ({ theme, productFilter, applyFilterBtnClick }) => {

    return (
        <MainLayout theme={theme} sidebar={<AppSidefilter onFilterConfirm={(data) => { applyFilterBtnClick(data) }} />}>
            <ProductGrid filter={productFilter} />
        </MainLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        showSidebar: state.showSidebar,
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