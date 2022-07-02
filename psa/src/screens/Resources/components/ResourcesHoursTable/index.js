import React from "react";
import { Table } from "react-bootstrap";
import { TableHeader } from "../../../../components/TableHeader";
import { TableBody } from "../../../../components/TableBody";

export const ResourcesHoursTable = () => {
    const headers = ["Proyecto", "Tarea", "Detalle", "Horas"]
    
    // Las rows estan hardcodeadas, pero llegan de API calls al backend
    const rows = [
        ["FNPC", "FNPC-119", "Se agregó el controlador de register", "4hs"],
        ["FNPC", "FNPC-120", "Se agregó el controlador de usuario", "2hs"],
        ["FNPC", "FNPC-121", "Se agregó el controlador de login", "2hs"]
    ]
    return (
        <Table striped bordered hover>
            <TableHeader headers={headers}/>
            <TableBody rows={rows} />
        </Table>
    );
}