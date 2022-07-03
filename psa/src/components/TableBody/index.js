import React from "react";
import { TableRowIcons } from "../../screens/Resources/components/TableRowIcons";


export const TableBody = (props) => {
    const {rows} = props

    let rowsElements = []
    for (const key in rows) {
        const row = rows[key]

        let rowElement = []
        for (const key in row) {
            const rowValue = row[key]
            rowElement.push(<td>{rowValue}</td>)
        }
        rowElement.push(
            <TableRowIcons />
        )
        rowsElements.push(<tr>{rowElement}</tr>)
    }
    
    return (
        <tbody>
            {rowsElements}
        </tbody>
    );
}