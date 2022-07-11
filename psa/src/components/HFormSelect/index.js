import React from "react";
import { FormGroup, FormLabel, FormSelect } from "./styled"

export const FormSelectContainer = (props) => {
    const {options, controlId, name, label, handleChange} = props;

    let optionsElements = []
    options.forEach(option => {
        optionsElements.push(<option value={option.id}>{option.name} [{option.id}]</option>)
    });

    return (
        <FormGroup controlId={controlId}>
            <FormLabel>{label}</FormLabel>
            <FormSelect name={name} onChange={e=>handleChange(e.target.value)}>
                {optionsElements}
            </FormSelect>
        </FormGroup>
    );
}