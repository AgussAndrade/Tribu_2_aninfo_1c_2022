import { useState, useEffect } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const controller = new AbortController()

    const fetchData = async () => {
      
      try {
        const res = await fetch(url, { signal: controller.signal })
        if(!res.ok) {
          throw new Error(res.statusText)
        }
        const data = await res.json()

        setData(data)
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("the fetch was aborted")
        }
      }
    }

    fetchData()

    return () => {
      controller.abort()
    }

  }, [url])

  return { data }
}