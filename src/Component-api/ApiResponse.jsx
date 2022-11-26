import React, { useEffect, useState } from 'react'
import './ApiResponse.css'

export const ApiResponse = () => {

    const[info, setInfo] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setInfo(data))
    }, [])

    
  return (
    <>
    <div className="main">
    {info && info.map( (data) => {
        return <div className="api-info">
                    <p>Id : {data.id}</p>
                    <p>UserId : {data.userId}</p>
                    <p>Title : {data.title}</p>
                    <p>Body : {data.body}</p>
                    <br />
                </div>
    })
    }
    </div>

    </>
  )
}
