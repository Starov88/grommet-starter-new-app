import React from "react";
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { sidebarActions } from '../store';
import { withResponsiveContext } from '../hoc';

import AppContent from "../components/app-content";
import ProductDetails from "../components/product-details";


const SingleProductPage = ({ setSidebarState }) => {

    const id = useParams().id;

    setSidebarState({
        enable: false
    });

    return (
        <AppContent sidebar={null}>
            <ProductDetails id={id} />
        </AppContent>
    );
}

const mapDispatchToProps = (dispatch) => {
    const { setSidebarState } = bindActionCreators(sidebarActions, dispatch);
    return {
        setSidebarState
    }
}

export default withResponsiveContext(connect(null, mapDispatchToProps)(SingleProductPage));