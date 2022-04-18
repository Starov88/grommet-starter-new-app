import React, { useState, useEffect } from "react";
import { Box, Button } from "grommet";

import { filterService } from "../../services";
import { useGetAllData } from "../../hoc";
import AppSidefilterItem from './app-sidefilter-item';

import './app-sidefilter.css';

const AppSidefilter = ({ onFilterConfirm }) => {

    const [options, setOptions] = useState([]);

    const { data, loading, error } = useGetAllData(filterService);

    useEffect(() => {
        console.log("useEffect - sidefilter")
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

            onFilterConfirm(result);
        }
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


    if ((loading && !error) || !options) {
        return (
            <p>loading...</p>
        );
    }

    if (error) {
        return (
            <p>{error}</p>
        );
    }


    const content = options.map((item) => {
        return (
            <AppSidefilterItem key={`${item.name}`} data={item} onChange={onOptionSelected} />
        )
    });

    return (
        <Box
            className="app-sidefilter"
            direction="column"
            align="start"
            alignContent="start"
            pad="small"
        >
            {content}
            <Button primary alignSelf="start" label="Apply" onClick={onConfirm} />
        </Box>
    )
}

export default AppSidefilter;

