import React from 'react'
import '../App.css'
import Urlap from './Urlap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import Sor from './Sor'

export default function Todo(props) {
    console.log(props.adat)
    const belsoLista = props.adat.tevekenyseg

  return (
    <div className='col-12 col-md-5 kategoria'>
        <h2>{props.adat.katnev}</h2>
        <div className='urlap'>
            <Urlap/>

        </div>

        <div className='tevekenyseg'>
            {belsoLista.map((elem,index)=>{
                return <Sor adat={elem} key={index}/>
           

            })}

           

        </div>






    </div>
  )
}
