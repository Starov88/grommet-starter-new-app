import React from 'react';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authActions } from '../store';
import { authService } from "../services";

import { AppConfirmation, AppRegistration } from '../components/auth';

const RegistrationPage = ({ userInfo, onRegistration }) => {

    const initErrorsState = { email: "", password: "", confirmPassword: "", firstName: "", lastName: "", confirmationCode: "" };
    const [errors, setErrors] = React.useState({ ...initErrorsState });
    const [confirmation, setConfirmation] = React.useState({ email: "", confirmationCode: "", isSended: false, isConfirmed: false });

    const navigate = useNavigate();

    const onSubmitBtnClicked = (value) => {
        authService.registration(value)
            .then((response) => {

                if (!response.success) {
                    var newErrors = { ...initErrorsState };
                    newErrors.global = "email not found or password is invalid";
                    setErrors(newErrors);
                    return;
                }

                onRegistration(response.data);
                navigate("/products");

            }).catch((err) => console.log(err));
    }

    var onSendConfirmCodeBtnClicked = (value) => {
        authService.sendConfirmationCode(value.email).then((response) => {

            if (!response.success) {
                var newErrors = { ...initErrorsState };
                newErrors.email = response.message;
                setErrors(newErrors);
                return;
            }

            var newCofirmState = { ...confirmation };
            newCofirmState.email = value.email;
            newCofirmState.isSended = true;
            setConfirmation(newCofirmState);
            setErrors({ ...initErrorsState });

        }).catch((err) => console.log(err));
    }

    var onEmailConfirmBtnClicked = (value) => {

        authService.checkConfirmationCode(value.email, value.confirmationCode).then((response) => {
            if (!response.success) {
                var newErrors = { ...initErrorsState };
                newErrors.confirmationCode = response.message;
                setErrors(newErrors);
                return;
            }

            var newCofirmState = { ...confirmation };
            newCofirmState.confirmationCode = value.confirmationCode;
            newCofirmState.isConfirmed = true;
            setConfirmation(newCofirmState);

        }).catch((err) => console.log(err));
    }

    return confirmation.isConfirmed ?
        (
            <AppRegistration onSubmit={onSubmitBtnClicked} errors={errors}
                confirmationOn={true} email={confirmation.email} confirmationCode={confirmation.confirmationCode} />
        ) :
        (
            <AppConfirmation onSubmit={confirmation.isSended ? onEmailConfirmBtnClicked : onSendConfirmCodeBtnClicked}
                errors={errors} email={confirmation.email} />
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
