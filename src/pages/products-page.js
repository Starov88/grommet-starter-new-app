import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../store';
import { withResponsiveContext, useGetAllData } from '../hoc';
import { filterService, cakeService } from "../services";


import ProductGrid from '../components/product-grid';
import AppContent from '../components/app-content';
import AppSidefilter from '../components/app-sidefilter';

const ProductsPage = ({ filter, setSidebarState, size }) => {

    useEffect(() => {
        setSidebarState({
            show: size !== 'small' ? true : false,
            enable: true
        });
    }, [size]);


    const productsData = useGetAllData(cakeService, filter);
    const filterData = useGetAllData(filterService);

    return (
        <AppContent sidebar={<AppSidefilter {...filterData} />}>
            <ProductGrid {...productsData} />
        </AppContent>
    )
}

const mapStateToProps = (state) => {
    return {
        filter: state.productFilter
    };
}

const mapDispatchToProps = (dispatch) => {
    const { setSidebarState } = bindActionCreators(sidebarActions, dispatch);
    return {
        setSidebarState
    }
}

export default withResponsiveContext(connect(mapStateToProps, mapDispatchToProps)(ProductsPage));
