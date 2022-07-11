import React, { useEffect, useState } from "react";
import { ResourcesForm } from "./styled";
import { FormGroupContainer } from "../../../../components/HFormGroup";
import axios from "axios";
import { ResourcesFormButton } from "./styled";
import { useNavigate } from "react-router-dom";
import { FormSelectContainer } from "../../../../components/FormSelect";

export const ResourcesHoursForm = (props) => {
    const navigate = useNavigate()

    const {reload, setReload, legajo, name, date} = props;
    const [proyect, setProyect] = useState(0);
    const [proyects, setProyects] = useState([]);
    const [task, setTask] = useState(0);
    const [tasks, setTasks] = useState([]);
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
            if (repos.status == 200) {
                setReload(reload + 1)
            } else {
                console.warn("Unkown response code")
            }
          }
        ).catch((error) => {
            navigate(
                '/resources/error',
                {
                    state: {
                      id: legajo,
                      name: name,
                      date: date,
                      url: '/resources/employee'
                    }
                  }
            )
        });
    };

    
    const mapProyects = (data) => {
        return data.map((p) => {
          return {
            id: p.id,
            name: `${p.nombre}`
          }
        })
      }
    
    const getProyects = async () => {
    const {data} = await axios.get(`https://moduloproyectos.herokuapp.com/proyectos`)
    setProyects(mapProyects(data));
    setProyect(data[0].id);
    }
    
    useEffect(() => {
        getProyects()
    }, [])

    const mapTasks = (data) => {
        return data.map((p) => {
          return {
            id: p.id,
            name: `${p.nombre || "tarea codigo: "}`
          }
        })
      }
    
    const getTasks = async () => {
    const {data} = await axios.get(`https://moduloproyectos.herokuapp.com/proyectos/${proyect}/tareas`);
    setTasks(mapTasks(data));
    setTask(data[0].id);
    }

    useEffect(() => {
        getTasks()
    }, [proyect]);

    return (
        <ResourcesForm>
            <FormGroupContainer disabled label="Nombre" placeholder={name}/>
            <FormGroupContainer disabled label="Fecha" placeholder={date}/>
            <FormSelectContainer options={proyects} controlId="proyecto" label="Proyecto" type="number" placeholder="codigo de tu proyecto" handleChange={setProyect}/>
            <FormSelectContainer options={tasks} label="Tarea" type="number" placeholder="codigo de tu tarea" handleChange={setTask}/>
            <FormGroupContainer label="Horas Trabajo" type="number" placeholder="2" handleChange={setHours}/>
            <FormGroupContainer as="textarea" label="Detalle" placeholder="Se agregó el controlador de login" handleChange={setDetail}/>
            <ResourcesFormButton onClick={handleSubmit}>
                Enviar
            </ResourcesFormButton>
        </ResourcesForm>
    );
}