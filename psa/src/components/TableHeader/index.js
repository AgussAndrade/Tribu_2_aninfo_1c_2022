import React from "react";

export const TableHeader = (props) => {
    const {headers} = props

    let headerElements = []
    for (const key in headers) {
        const header = headers[key]
        headerElements.push(<th>{header}</th>)
    }

    return (
        <thead>
            <tr>
                {headerElements}
            </tr>
        </thead>
    );
}