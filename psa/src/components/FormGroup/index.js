import React from "react";
import { FormGroup, FormLabel, FormControl } from "./styled"

export const FormGroupContainer = (props) => {
    const {controlId, label, type, name, placeholder, handleChange} = props;
    return (
        <FormGroup controlId={controlId}>
            <FormLabel>{label}</FormLabel>
            <FormControl type={type} name={name} placeholder={placeholder} onChange={e=>handleChange(e.target.value)} />
        </FormGroup>
    );
}