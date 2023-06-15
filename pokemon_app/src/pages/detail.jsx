import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Card } from "../component/card"
import "./list.css"


function Details(){
    const {id}=useParams()
   const {pokemonList}=useSelector(state=>state)
   const [selectedPokemon,setSelectedPokemon]=useState({})

   useEffect(()=>{
       const filteredPokemon=pokemonList.filter(p=>p.id==id)
       setSelectedPokemon(filteredPokemon[0])
   },[id])

   console.log(selectedPokemon)

    return (
        <>
        <div className="detailDiv">
            <Card pokemon={selectedPokemon}/>
        </div>
        </>
    )
}
export {Details}