import React from "react";
import { Box, FormField, TextInput, Form, Button, Heading, Text } from "grommet";

import "./auth.css";

const AppLogin = ({ onSubmit, errors }) => {

    const initState = { email: "webapi.email@gmail.com", password: "1Password!" };
    //const initState = { email: "", password: "" };
    const [value, setValue] = React.useState({ ...initState });

    return (
        <Box margin="xlarge">
            <Form
                validate="blur"
                value={value}
                onChange={nextValue => { setValue(nextValue); }}
                onReset={() => { errors.global = ""; setValue(initState); }}
                onSubmit={() => { onSubmit(value); }}
                onValidate={() => { console.log(value); }}
            >
                <Heading margin={{ top: "none", bottom: "small" }}>Login</Heading>
                {errors.global ? <Text color="error" margin={{ top: "none", bottom: "medium" }} style={{ display: "inline-block" }}>{errors.global}</Text> : null}
                <FormField name="email" htmlFor="email-input-id" label="Email" error={errors.email}>
                    <TextInput required name="email" id="email-input-id" placeholder="type email here" />
                </FormField>
                <FormField name="password" htmlFor="password-input-id" label="Password" error={errors.password}>
                    <TextInput required name="password" id="password-input-id" placeholder="type password here" />
                </FormField>
                <Box direction="row" gap="small" margin={{ top: "medium" }}>
                    <Button type="submit" primary label="Submit" />
                    <Button type="reset" label="Reset" />
                </Box>
            </Form>
        </Box>
    );
}

export default AppLogin;