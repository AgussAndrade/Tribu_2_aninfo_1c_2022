import React from "react";
import { Card, Table } from "react-bootstrap";
import { FormGroupContainer } from "../../../../components/FormGroup";

export const ResourcesHoursForm = (props) => {
    const {date} = props;
    const {a} = ""
    return (
        <Table>
            <FormGroupContainer label="Fecha" placeholder={date}/>
            <FormGroupContainer label="Proyecto" placeholder="FNPC"/>
            <FormGroupContainer label="Tarea" placeholder="FNPC-121"/>
            <FormGroupContainer label="Horas Trabajo" placeholder="2hs"/>
            <FormGroupContainer label="Detalle" placeholder="Se agregó el controlador de login"/>
            <FormGroupContainer label="Horas Totales" placeholder="6hs"/>
            <FormGroupContainer label="Horas Mensuales" placeholder="110hs"/>
        </Table>
    );
}