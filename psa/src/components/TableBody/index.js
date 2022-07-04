import React from "react";
import { TableRowIcons } from "../../screens/Resources/components/TableRowIcons";
import { ResourcesTableRow } from "../../screens/Resources/components/ResourcesTableRow";

export const TableBody = (props) => {
    const {rows} = props

    let rowsElements = []
    for (const key in rows) {
        const row = rows[key]
        rowsElements.push(<ResourcesTableRow row={row} />)
    }
    
    return (
        <tbody>
            {rowsElements}
        </tbody>
    );
}