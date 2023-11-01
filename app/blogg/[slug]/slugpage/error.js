"use client"


import { useEffect, useState} from 'react'
 
export default function Error({ error, reset }) {
    const [err, setErr ] = useState("")
  useEffect(() => {
    // Log the error to an error reporting service
    setErr(error)
    console.error(error)
  }, [error])
 
  return (
    <div>
      <h2>Something went wrong! {err}</h2>
      
    </div>
  )
}