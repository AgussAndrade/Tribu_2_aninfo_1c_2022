import React from "react";
import { VContainer, Label, Select, Option } from "../../styled";

export const ResourcesSelect = (props) => {
    const {label} = props

    const options = [ 
        {value: "val1", label: "Value 1"},
        {value: "val2", label: "Value 2"},
        {value: "val3", label: "Value 3"}
    ]

    let optionElems = []
    for (const i in options) {
        const option = options[i]
        console.log(option)
        optionElems.push(<Option value={option.value}>{option.label}</Option>)
    }
    return (
        <VContainer>
            <Label>{label}</Label>
            <Select>
                {optionElems}
            </Select>
        </VContainer>
    );
};