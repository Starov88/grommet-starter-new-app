import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '../store';
import { authService } from "../services";

import { AppLogin } from '../components/auth';

const LoginPage = ({ userInfo, onLogin }) => {

    const initState = { email: "", password: "" };
    const [errors, setErrors] = React.useState({ ...initState });

    const navigate = useNavigate();

    const onSubmitBtnClicked = (data) => {
        authService.login(data.email, data.password).then((response) => {

            if (!response.success) {
                var newErrors = { ...initState };
                newErrors.global = "email not found or password is invalid";
                setErrors(newErrors);
                return;
            }

            onLogin(response.data);
            navigate("/products");

        }).catch((err) => console.log(err));
    }

    return (
        <AppLogin onSubmit={onSubmitBtnClicked} errors={errors} />
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    const { onLogin } = bindActionCreators(authActions, dispatch);
    return {
        onLogin
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
