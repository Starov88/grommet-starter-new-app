import React from "react";
import { Box, CheckBoxGroup, Text } from "grommet";

const AppSidefilterItem = ({ data, onChange }) => {

    let checked = [];
    const options = data.options.map((item) => {
        if (item.checked) {
            checked.push(item.value);
        }
        return {
            label: item.label,
            value: item.value
        }
    });

    return (
        <Box className="app-sidefilter-block"
            margin={{ bottom: "medium" }}
        >
            <Text
                weight="bold"
                size="medium"
                color="brand"
                alignSelf="start"
                margin={{ bottom: "small" }}
            >
                {data.name}
            </Text>
            <CheckBoxGroup
                className="app-sidefilter-cb"
                options={options}
                value={checked}
                valueKey='value'
                onChange={onChange}
                alignSelf="start"
            />
        </Box>
    )
}

export default AppSidefilterItem;