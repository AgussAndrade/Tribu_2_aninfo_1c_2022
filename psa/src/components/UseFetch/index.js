import { useState, useEffect } from "react"

export const UseFetch = (props) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  if (props.config.header) {
    props.config.header["Access-Control-Allow-Origin"] = "*"
    props.config.header["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
  } else {
    props.config.header = {}
    props.config.header["Access-Control-Allow-Origin"] = "*"
    props.config.header["Access-Control-Allow-Headers"] = "Origin, X-Requested-With, Content-Type, Accept"
  }

  useEffect(() => {
    const fetchData = async () => {
      setIsPending(true)
      try {
        const res = await fetch(props.url, props.config)
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()
        setIsPending(false)
        setData(data)
        setError(null)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("The fetch was aborted")
        } else {
          setIsPending(false)
          setError(error)
        }
      }
    }

    fetchData()
  }, [props.url])

  return { data, isPending, error }
}