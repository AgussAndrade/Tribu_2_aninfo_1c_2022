import React from "react";
import { GroupContainer, FormGroup, FormLabel, FormControl } from "./styled"

export const FormGroupContainer = (props) => {
    const {disabled, controlId, label, type, name, placeholder, handleChange} = props;

    return (
        <GroupContainer>
            <FormGroup controlId={controlId}>
                <FormLabel>{label}</FormLabel>
                <FormControl disabled={disabled} as={type} name={name} placeholder={placeholder} onChange={e=>handleChange(e.target.value)} />
            </FormGroup>
        </GroupContainer>
    );
}