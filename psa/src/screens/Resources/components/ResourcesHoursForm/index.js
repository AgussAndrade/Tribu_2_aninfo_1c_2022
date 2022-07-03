import React, { useState } from "react";
import { Card, Table } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { ResourcesForm } from "./styled";
import { FormGroupContainer } from "../../../../components/HFormGroup";

export const ResourcesHoursForm = (props) => {
    const {date} = props;
    const [proyect,setProyect] = useState("");
    const [task,setTask] = useState("");
    const [hours,setHours] = useState("");
    const [detail,setDetail] = useState("");

    return (
        <ResourcesForm>
            <FormGroupContainer disabled label="Fecha" placeholder={date}/>
            <FormGroupContainer label="Proyecto" type="number" placeholder="codigo de tu proyecto" handleChange={setProyect}/>
            <FormGroupContainer label="Tarea" type="number" placeholder="codigo de tu tarea" handleChange={setTask}/>
            <FormGroupContainer label="Horas Trabajo" type="number" placeholder="2" handleChange={setHours}/>
            <FormGroupContainer type="textarea" label="Detalle" placeholder="Se agregó el controlador de login" handleChange={setDetail}/>
        </ResourcesForm>
    );
}