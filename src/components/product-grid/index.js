import { connect } from 'react-redux';

import ProductGrid from "./product-grid";

const mapStateToProps = (state) => {
    return {
        filter: state.productFilter
    };
}

export default connect(mapStateToProps)(ProductGrid);