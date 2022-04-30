import React, { useState, useEffect } from "react";
import { Box, Button } from "grommet";

import AppSidefilterItem from './app-sidefilter-item';

import './app-sidefilter.css';

const AppSidefilter = ({ data, loading, error, onFilterConfirm, size }) => {

    const [options, setOptions] = useState([]);

    useEffect(() => {
        setOptions(data);
    }, [data]);

    const onConfirm = () => {
        if (onFilterConfirm) {
            var result = {};
            options.forEach(item => item.options.forEach((opt) => {
                if (opt.checked) {
                    if (result[item.id]) {
                        result[item.id].push(opt.value);
                    }
                    else {
                        result[item.id] = [opt.value];
                    }
                }
            }));

            onFilterConfirm({ filter: result, closeFilter: size === 'small' });
        }
    }

    const onFlash = () => {
        if (onFilterConfirm) {
            onFilterConfirm({ filter: {}, closeFilter: size === 'small' });
        }
        var newOptions = [...options];
        newOptions.forEach((item) => {
            item.options.forEach((opt) => {
                opt.checked = false;
            });
        });
        setOptions(newOptions);
    }

    const onOptionSelected = ({ value, option }) => {
        var newData = [...options];
        var indxOpt = -1;
        var indx = newData.findIndex((item) => {
            indxOpt = item.options.findIndex((opt) => opt.label === option.label);
            if (indxOpt > -1) return true;
            return false;
        });
        if (indxOpt > -1) {
            newData[indx].options[indxOpt] = { ...newData[indx].options[indxOpt] };
            newData[indx].options[indxOpt].checked = !newData[indx].options[indxOpt].checked;
        }

        setOptions(newData);
    }

    let content = null;
    if ((loading && !error) || !options) {
        content = (
            <p>loading...</p>
        );
    }
    else if (error) {
        content = (
            <p>{error}</p>
        );
    }
    else if (!loading && !error && options) {
        let items = options.map((item) => {
            return (
                <AppSidefilterItem key={`${item.name}`} data={item} onChange={onOptionSelected} />
            )
        });
        content = (
            <React.Fragment>
                {items}
                <Button primary label="Apply" onClick={onConfirm} />
                <Button secondary label="Flash" onClick={onFlash} margin={{ top: "small" }} />
            </React.Fragment>
        );
    }

    return (
        <Box
            className="app-sidefilter"
            direction="column"
            align="start"
            alignContent="start"
            pad="small"
            height={{ min: "100%" }}
        >
            {content}
        </Box>
    )
}

export default AppSidefilter;

