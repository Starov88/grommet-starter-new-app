import React, { useState } from 'react';

import ProductGrid from '../components/product-grid';
import MainLayout from '../components/layouts/main-layout';
import AppSidefilter from '../components/app-sidefilter';

const ProductsPage = ({ theme }) => {

    const [filter, setFilter] = useState(null);

    return (
        <MainLayout theme={theme} sidebar={<AppSidefilter onFilterConfirm={(data) => { setFilter(data) }} />}>
            <ProductGrid filter={filter} />
        </MainLayout>
    )
}

export default ProductsPage;