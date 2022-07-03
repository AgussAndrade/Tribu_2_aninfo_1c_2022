import React from "react";
import { GroupContainer, FormGroup, FormLabel, FormControl } from "./styled"

export const FormGroupContainer = (props) => {
    const {disabled, controlId, label, type, as, name, placeholder, handleChange} = props;
    return (
        <GroupContainer>
            <FormGroup controlId={controlId}>
                <FormLabel>{label}</FormLabel>
                <FormControl disabled={disabled} type={type} as={as} name={name} placeholder={placeholder} onChange={e=>handleChange(e.target.value)} />
            </FormGroup>
        </GroupContainer>
    );
}