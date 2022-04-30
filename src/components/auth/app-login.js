import { Box, FormField, TextInput, Form, Button } from "grommet";
import React from "react";

import "./app-login.css";

const AppLogin = () => {

    const initState = { email: "", password: "" };
    const [value, setValue] = React.useState(initState);

    // var re = /[.]+@[.]+/;
    // const validateEmail = {
    //     regexp: re,
    //     message: "string",
    //     status: "error"
    // }
    // const valEmail = (one, two) => { console.log(one, two) };

    const formErrors = {
        email: "",
        password: ""
    }

    return (
        <Form
            errors={formErrors}
            messages={{ required: "обязательно" }}
            validate="blur"
            value={value}
            onChange={nextValue => { setValue(nextValue); }}
            onReset={() => setValue(initState)}
            onSubmit={({ value }) => { console.log(value) }}
            onValidate={() => { console.log(value) }}
        >
            <FormField name="email" htmlFor="email-input-id" label="Email">
                <TextInput required name="email" id="email-input-id" placeholder="type email here" />
            </FormField>
            <FormField name="password" label="Password">
                <TextInput required name="password" placeholder="type password here" />
            </FormField>
            <Box direction="row" gap="medium">
                <Button type="submit" primary label="Submit" />
                <Button type="reset" label="Reset" />
            </Box>
        </Form>
    );
}

export default AppLogin;