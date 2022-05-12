import React from "react";
import { Box, FormField, TextInput, Form, Button, Heading, Text } from "grommet";

import "./auth.css";

const AppConfirmation = ({ onSubmit, errors, email = "" }) => {

    const initState = { email, confirmationCode: "" };
    const [value, setValue] = React.useState({ ...initState });

    var isSended = email !== "" && !errors.email;

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
                <FormField name="email" htmlFor="email-input-id" label="Email" error={errors.email}>
                    {isSended ?
                        <TextInput required disabled name="email" id="email-input-id" /> :
                        <TextInput required name="email" id="email-input-id" placeholder="type email here" />
                    }
                </FormField>
                {isSended ?
                    (
                        <React.Fragment>
                            <FormField name="confirmationCode" htmlFor="code-input-id" label="Confirmation Code" error={errors.confirmationCode}>
                                <TextInput required name="confirmationCode" id="code-input-id" placeholder="type confirmation code here" />
                            </FormField>
                            <Box direction="row" gap="small" margin={{ top: "medium" }}>
                                <Button type="submit" primary label="Submit" />
                                <Button type="reset" label="Reset" />
                            </Box>
                        </React.Fragment>
                    ) :
                    (
                        <Box direction="row" gap="small" margin={{ top: "medium" }}>
                            <Button type="submit" primary label="Send code" />
                        </Box>
                    )
                }
            </Form>
        </Box>
    );
}

export default AppConfirmation;