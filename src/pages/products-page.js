import React, { useState } from 'react';

import { useGetAllData } from '../hoc';
import ProductGrid from '../components/product-grid';
import MainLayout from '../components/layouts/main-layout';
import { cakeService } from '../services';
import ProductItem from '../components/product-item';
import { Button } from 'grommet';
import AppSidefilter from '../components/app-sidefilter.js';

const filterData = [
    { name: 'Тип', options: [{ label: 'Бисквит', value: 'bisquit', checked: false }, { label: 'Мусс', value: 'muss', checked: true }, { label: 'Сыр', value: 'cheese', checked: false }] },
    { name: 'Состав', options: [{ label: 'Шоколад', value: 'choko', checked: false }, { label: 'Молоко', value: 'milk', checked: false }, { label: 'Орехи', value: 'nuts', checked: false }] },
    { name: 'Диаметр', options: [{ label: '16см', value: 16, checked: false }, { label: '20см', value: 20, checked: false }, { label: '24см', value: 24, checked: false }] }
];

const ProductsPage = ({ theme }) => {

    const [filter, setFilter] = useState(null);

    return (
        <MainLayout theme={theme} sidebar={<AppSidefilter onFilterConfirm={(data) => { console.log(data); setFilter(data) }} />}>
            <ProductGrid filter={filter} />
        </MainLayout>
    )

}

export default ProductsPage;