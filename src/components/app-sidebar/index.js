import AppSidebar from "./app-sidebar";
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        showSidebar: state.showSidebar
    };
}

export default connect(mapStateToProps)(AppSidebar);