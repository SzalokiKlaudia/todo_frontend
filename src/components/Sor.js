import { faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../App.css'
import useAdatContext from '../context/AdatContext'

export default function Sor(props) {
    const {torles} = useAdatContext()

    const torol = ()=>{
        torles(props.adat.id)
    }
  return (
    <>
    <div className='row kartya'>

    <div className='col-md-2'>{props.adat.id}</div>
    <div className='col-md-4'>{props.adat.tev_nev}</div>
    <div className='col-md-3'>{props.adat.allapot}</div>
    <div className='col-md-3' onClick={torol}><FontAwesomeIcon icon={faX} /></div>



    </div>



    </>
  )
}
