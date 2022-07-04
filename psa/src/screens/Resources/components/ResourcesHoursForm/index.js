import React, { useState } from "react";
import { ResourcesForm } from "./styled";
import { FormGroupContainer } from "../../../../components/HFormGroup";
import axios from "axios";
import { ResourcesFormButton } from "./styled";
import { useNavigate } from "react-router-dom";


export const ResourcesHoursForm = (props) => {
    const navigate = useNavigate()

    const {legajo, name, date} = props;
    const [proyect, setProyect] = useState(0);
    const [task, setTask] = useState(0);
    const [hours, setHours] = useState(0);
    const [detail, setDetail] = useState("");

    const handleSubmit = ()=> {
        // Aca va el post
        axios.post('https://squad5-recursos.herokuapp.com/api/horas/',
        {
            legajo: legajo,
            name: name,
            codigoProyecto: proyect,
            codigoTarea: task,
            detalle: detail,
            fecha: date,
            horasTrabajadas: hours
        }
        ).then(
          (repos) => {
            console.log(repos.status)
            if (repos.status == 200) {
                // navigate('/resources/employee',
                // {
                //     state: {
                //         id: legajo,
                //         name: name,
                //         date: date
                //     }
                // })
            }
          }
        );
      };

    return (
        <ResourcesForm>
            <FormGroupContainer disabled label="Nombre" placeholder={name}/>
            <FormGroupContainer disabled label="Fecha" placeholder={date}/>
            <FormGroupContainer label="Proyecto" type="number" placeholder="codigo de tu proyecto" handleChange={setProyect}/>
            <FormGroupContainer label="Tarea" type="number" placeholder="codigo de tu tarea" handleChange={setTask}/>
            <FormGroupContainer label="Horas Trabajo" type="number" placeholder="2" handleChange={setHours}/>
            <FormGroupContainer as="textarea" label="Detalle" placeholder="Se agregó el controlador de login" handleChange={setDetail}/>
            <ResourcesFormButton onClick={handleSubmit}>
                Enviar
            </ResourcesFormButton>
        </ResourcesForm>
    );
}