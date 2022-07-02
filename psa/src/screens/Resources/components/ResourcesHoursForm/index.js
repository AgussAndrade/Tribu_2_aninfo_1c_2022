import React from "react";
import { Card, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ResourcesForm } from "./styled";
import { FormGroupContainer } from "../../../../components/HFormGroup";

export const ResourcesHoursForm = (props) => {
    const {date} = props;
    const {a} = ""
    return (
        <ResourcesForm>
            <FormGroupContainer disabled label="Fecha" placeholder={date}/>
            <FormGroupContainer label="Proyecto" placeholder="FNPC"/>
            <FormGroupContainer label="Tarea" placeholder="FNPC-121"/>
            <FormGroupContainer label="Horas Trabajo" placeholder="2hs"/>
            <FormGroupContainer type="textarea" label="Detalle" placeholder="Se agregó el controlador de login"/>      
        </ResourcesForm>
    );
}