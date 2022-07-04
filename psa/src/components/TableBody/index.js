import React from "react";
import { TableRowIcons } from "../../screens/Resources/components/TableRowIcons";
import { ResourcesTableRow } from "../../screens/Resources/components/ResourcesTableRow";

export const TableBody = (props) => {
    const {reload, setReload, rows, toggleReload} = props

    let rowsElements = []
    for (const key in rows) {
        const row = rows[key]
        rowsElements.push(<ResourcesTableRow reload={reload} setReload={setReload} row={row} toggleReload={toggleReload} />)
    }
    
    return (
        <tbody>
            {rowsElements}
        </tbody>
    );
}