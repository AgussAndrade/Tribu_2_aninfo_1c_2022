import {useState, useEffect, useRef} from "react"
import {PROYECTO_URL, SOPORTE_URL} from "./apiUrls";
import {getFormattedObject} from "./getClients";

export const useLocalStorage = (keyName) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
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
    const controller = new AbortController()

    const fetchData = async () => {
      setIsPending(true)
      
      try {
        let _items = JSON.parse(localStorage.getItem(keyName));
        if (_items !== null) {
          setData(_items)
        } else {
          const res = await fetch(props[keyName].url, { signal: controller.signal })
          if(!res.ok) {
            throw new Error(res.statusText)
          }
          let data = await res.json()

          if (props[keyName].formatJson) {
            data = getFormattedObject(data);
          }
          localStorage.setItem(keyName, JSON.stringify(data));
          setData(data)
        }
          setIsPending(false)
          setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        } else {
          setIsPending(false)
          setError('Could not fetch the data')
        }
      }
    }
    let _items = JSON.parse(localStorage.getItem(keyName));
    if (_items !== null) {
      setData(_items)
    } else {
      fetchData()
    }

    return () => {
      controller.abort()
    }

  }, [keyName])

  return { data, isPending }
}