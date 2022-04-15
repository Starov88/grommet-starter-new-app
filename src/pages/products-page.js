import React, { useState } from 'react';

import { useGetAllData } from '../hoc';
import ProductGrid from '../components/product-grid';
import MainLayout from '../components/layouts/main-layout';
import { cakeService } from '../services';
import ProductItem from '../components/product-item';
import { Button } from 'grommet';

const ProductsPage = ({ theme }) => {

    // const filter = useMemo(() => ({
    //     name: null,
    //     loading: true,
    //     error: null
    // }), []);

    const [filter, setFilter] = useState(null);

    const { data, loading, error } = useGetAllData(cakeService, filter);


    console.log(filter);

    if (loading && !error) {
        return (
            <MainLayout theme={theme}>
                <ProductGrid><p>loading</p></ProductGrid>
            </MainLayout>
        );
    }

    if (data) {
        const items = data.map((item) => {
            return (
                <ProductItem key={item.id} product={item} />
            );
        });

        return (
            <MainLayout theme={theme}>
                {/* <Button onClick={() => setFilter({ name: 'наполеон11' })}>Click</Button> */}
                <ProductGrid>{items}</ProductGrid>
            </MainLayout>
        );
    }

    return (
        <MainLayout theme={theme}>
            <ProductGrid><p>{error}</p></ProductGrid>
        </MainLayout>
    );

}

export default ProductsPage;