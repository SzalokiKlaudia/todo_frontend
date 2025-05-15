import React from 'react'
import useAdatContext from '../context/AdatContext'
import Todo from './Todo'

export default function Todos() {
    const {lista} = useAdatContext()
    
  return (
    <div className='row justify-content-center gap-2 mt-5'>
        {lista.map((elem,index)=>{
            return <Todo adat={elem} key={index}/>
        })}
    


    </div>
  )
}
