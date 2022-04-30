import React from 'react';

import { AppLogin } from '../components/auth';
import AuthLayout from '../components/layouts/auth-layout';

const LoginPage = () => {

    return (
        <AuthLayout>
            <AppLogin />
        </AuthLayout>
    )
}

export default LoginPage;
