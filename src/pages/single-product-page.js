import React from "react";

import AppContent from "../components/app-content";
import ProductDetails from "../components/product-details";


const SingleProductPage = (props) => {
    return (
        <AppContent sidebar={null}>
            <ProductDetails />
        </AppContent>
    );
}

export default SingleProductPage;