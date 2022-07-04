import { useState, useEffect } from "react"

export const UseFetch = (props) => {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

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
          console.log("the fetch was aborted")
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