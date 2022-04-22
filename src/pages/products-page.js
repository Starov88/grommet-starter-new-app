import React from 'react';

import ProductGrid from '../components/product-grid';
import AppContent from '../components/app-content';
import AppSidefilter from '../components/app-sidefilter';

const ProductsPage = ({ applyFilterBtnClick }) => {

    return (
        <AppContent sidebar={<AppSidefilter onFilterConfirm={(data) => { applyFilterBtnClick(data) }} />}>
            <ProductGrid />
        </AppContent>
    )
}

export default ProductsPage;