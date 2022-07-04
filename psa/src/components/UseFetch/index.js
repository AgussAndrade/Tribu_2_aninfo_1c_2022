import {useEffect, useState} from "react"

export const UseFetch = (props) => {
    const[data, setData] = useState([]);
    const [error, setError] = useState(false);
    useEffect(() => {
        fetch(props.url, props.config)
            .then((res) => res.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                setError(error)
            });
    }, [props.url]);
    return {data, error};
}