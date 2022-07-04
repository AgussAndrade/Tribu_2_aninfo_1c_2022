import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { TableHeader } from "../../../../components/TableHeader";
import { TableBody } from "../../../../components/TableBody";
import axios from "axios";

export const ResourcesHoursTable = (props) => {
    const headers = ["Proyecto", "Tarea", "Fecha", "Detalle", "Horas", "Acciones"]
    
    const {reload, setReload, toggleReload, legajo, date} = props

    const mapRows = (rowsData) => {
        return rowsData.map((row) => {
            return [
                row.id,
                row.codigoProyecto,
                row.codigoTarea,
                row.fecha,
                row.detalle,
                row.horasTrabajadas
            ]
        });
    }

    const getRows = async () => {
        const {data} = await axios.get(`https://squad5-recursos.herokuapp.com/api/horas/${legajo}`)
        setRows(mapRows(data))
        console.log(data)
    }

    const [rows, setRows] = useState([])
    useEffect(() => {
        getRows()
    }, [reload])

    return (
        <Table striped bordered hover>
            <TableHeader headers={headers}/>
            <TableBody reload={reload} setReload={setReload} rows={rows} toggleReload={toggleReload} />
        </Table>
    );
}