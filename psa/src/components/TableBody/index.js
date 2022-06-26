import React from "react";

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
        rowsElements.push(<tr>{rowElement}</tr>)
    }
    
    return (
        <tbody>
            {rowsElements}
        </tbody>
    );
}