import React, {useEffect, useState} from "react";
import {getFormattedObject} from "./getClients";
import {PROYECTO_URL, SOPORTE_URL} from "./apiUrls";

export function GetOrSetItem(item) {

    const [items, setItems] = useState([]);
    let config = {
        headers: {"Content-Type": "application/json"},
        method: "GET"
    }

    const props = {
        "clientes": {
            url: SOPORTE_URL + "servicio_externo/clientes",
            formatJson: true,
        },
        "empleados": {
            url: PROYECTO_URL + "/empleados",
            formatJson: true,
        },
        "proyectos": {
            url: PROYECTO_URL + "/proyectos",
            formatJson: false,
        }
    }

    useEffect(() => {
        let _items = JSON.parse(localStorage.getItem(item));
        if (_items === null) {
            fetch(props[item].url, config)
                .then((res) => res.json())
                .then((result) => {
                    if (props[item].formatJson) {
                        result = getFormattedObject(result);
                    }
                    localStorage.setItem(item, JSON.stringify(result));
                    setItems(result);

                })

        } else {
            setItems(JSON.stringify(_items))

        }
    }, []);
    return items;
}