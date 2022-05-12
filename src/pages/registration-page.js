import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '../store';
import { authService } from "../services";

import { AppRegistration } from '../components/auth';

const RegistrationPage = ({ userInfo, onRegistration }) => {

    const initState = { email: "", password: "", confirmPassword: "" };
    const [errors, setErrors] = React.useState({ ...initState });

    const navigate = useNavigate();

    const onSubmitBtnClicked = (data) => {
        authService.login(data.email, data.password).then((response) => {

            console.log(response);

            if (!response.success) {
                var newErrors = { ...initState };
                newErrors.global = "email not found or password is invalid";
                setErrors(newErrors);
                return;
            }

            onRegistration(response.data);
            navigate("/products");

        }).catch((err) => console.log(err));
    }

    return (
        <AppRegistration onSubmit={onSubmitBtnClicked} errors={errors} />
    )
}

const mapStateToProps = (state) => {
    return {
        userInfo: state.userInfo
    };
}

const mapDispatchToProps = (dispatch) => {
    const { onRegistration } = bindActionCreators(authActions, dispatch);
    return {
        onRegistration
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
