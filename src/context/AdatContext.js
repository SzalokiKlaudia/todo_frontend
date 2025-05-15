import { MyAxios } from "../api/MyAxios";

const { createContext, useContext, useEffect, useState } = require("react");

const AdatContext = createContext()

export const AdatProvider = ({ children })=>{
    const [lista, setLista] = useState([])

    const getLista = async()=>{
        try{
            const {data} = await MyAxios.get('api/tevekenysegek')
            setLista(data)

        }catch(error){
            console.log(error,'Hiba van')
        }
    }

    const torles = async(id)=>{
        try{
            const {data} = await MyAxios.delete(`api/tevekenyseg/${id}`)
            getLista()

        }catch(error){
            console.log(error,'Hiba van')
        }

    }

    const postKeres = async({...adat},vegpont)=>{
        try{
            const {data} = await MyAxios.post(vegpont,adat)
            getLista()

        }catch(error){
            console.log(error,'Hiba van')
        }
    }





    useEffect(()=>{
        getLista()

    },[])

return(
    <AdatContext.Provider value={{ lista,torles,postKeres }}>
    {children}
        
    </AdatContext.Provider>
)

}

export default function useAdatContext(){
    return useContext(AdatContext)
}