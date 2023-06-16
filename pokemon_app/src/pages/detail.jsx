import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Card } from "../component/card"
import "./list.css"


function Details(){
    const {name}=useParams()
   const {pokemonList,filterList}=useSelector(state=>state)
   const [selectedPokemon,setSelectedPokemon]=useState({})

   useEffect(()=>{
        let filteredPokemon
        if(filterList.length!=0){
            filteredPokemon=filterList.filter(p=>p.name==name)
        }
        else{
            filteredPokemon=pokemonList.filter(p=>p.name==name)

        }
       setSelectedPokemon(filteredPokemon[0])
   },[name])

    return (
        <>
        <div className="detailDiv">
        {Object.keys(selectedPokemon).length > 0 && (
            <Card pokemon={selectedPokemon}/>
        )}
        </div>
        </>
    )
}
export {Details}