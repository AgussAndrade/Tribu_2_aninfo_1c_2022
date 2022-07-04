import React, { useState } from "react";
import { TableRowIcons } from "../TableRowIcons";

export const ResourcesTableRow = (props) => {
    const {row} = props;

    const [hours, setHours] = useState(row[5])

    return (
        <tr>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
            <td>{row[4]}</td>
            <td>{hours}</td>
            <TableRowIcons id={row[0]} setHours={setHours}/>
        </tr>
    );
}