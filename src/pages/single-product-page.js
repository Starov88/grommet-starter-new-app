import React from "react";
import { useParams } from "react-router-dom";

import AppContent from "../components/app-content";
import ProductDetails from "../components/product-details";


const SingleProductPage = (props) => {

    const id = useParams().id;

    return (
        <AppContent sidebar={null}>
            <ProductDetails id={id} />
        </AppContent>
    );
}

export default SingleProductPage;