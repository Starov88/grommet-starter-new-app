import React from "react";
import { Box, FormField, TextInput, Form, Button, Heading, Text } from "grommet";

import "./auth.css";

const AppRegistration = ({ onSubmit, errors, confirmationOn = false, email = "", confirmationCode = "" }) => {

    const initState = { email, password: "Jo123", confirmPassword: "Jo123", firstName: "Yevhen", lastName: "Starov", confirmationCode };
    const [value, setValue] = React.useState({ ...initState });

    return (
        <Box margin="xlarge">
            <Form
                validate="blur"
                value={value}
                onChange={nextValue => { setValue(nextValue); }}
                onReset={() => setValue(initState)}
                onSubmit={() => { onSubmit(value); }}
                onValidate={() => { console.log(value); }}
            >
                <Heading margin={{ top: "none", bottom: "small" }}>Registration</Heading>
                {errors.global ? <Text color="error" margin={{ top: "none", bottom: "medium" }} style={{ display: "inline-block" }}>{errors.global}</Text> : null}
                {confirmationOn ?
                    (
                        <React.Fragment>
                            <TextInput required hidden name="email" />
                            <TextInput required hidden name="confirmationCode" />
                        </React.Fragment>
                    ) :
                    (
                        <FormField name="email" htmlFor="email-input-id" label="Email" error={errors.email}>
                            <TextInput required name="email" id="email-input-id" placeholder="type email here" />
                        </FormField>
                    )}
                <FormField name="password" htmlFor="password-input-id" label="Password" error={errors.password}>
                    <TextInput required name="password" id="password-input-id" placeholder="type password here" />
                </FormField>
                <FormField name="confirmPassword" htmlFor="c-password-input-id" label="Confirm password" error={errors.confirmPassword}>
                    <TextInput required name="confirmPassword" id="c-password-input-id" placeholder="type confirm password here" />
                </FormField>
                <FormField name="firstName" htmlFor="fname-input-id" label="First name" error={errors.firstName}>
                    <TextInput required name="firstName" id="fname-input-id" placeholder="type first name here" />
                </FormField>
                <FormField name="lastName" htmlFor="lname-input-id" label="Last name" error={errors.firstName}>
                    <TextInput required name="lastName" id="lname-input-id" placeholder="type last name here" />
                </FormField>

                <Box direction="row" gap="small" margin={{ top: "medium" }}>
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
        </Box>
    );
}

export default AppRegistration;