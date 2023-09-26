'use client'

import React, { useEffect, useState } from 'react'
import styles from './page.module.css'


const Dashboard = () => {
  
  const [data,setData] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(()=>{
    const getData = async () =>{
      setIsLoading(true)
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        cache: 'no-store'
      });

      if (!res.ok) {
        return notFound(true)
      }
      const data = await res.json()
      setData(data)
      setIsLoading(false)
    }
    getData()
  },[])
  
  console.log(data)
  
  return (
    <div className={styles.container}>dashboard</div>
  )
}

export default Dashboard