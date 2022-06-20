import React from "react";
import { VContainer, Label, Input } from "../../styled";

export const ResourcesInput = (props) => {
    const {label} = props

    return (
        <VContainer>
            <Label>{label}</Label>
            <Input />
        </VContainer>
    );
};