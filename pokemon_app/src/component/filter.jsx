import { useState } from "react";
import { fetchPokemons, filterPokemon,clearFilter } from "./redux/action";
import { useDispatch } from "react-redux";
import "./component.css"


function Filter(){
    const [filter,setFilter]=useState('')
    
    const [filterType,setFilterType]=useState('')
   const dispatch=useDispatch()
    

      const handleFilterCategory=(e)=>{
        reset()
            let filterStr=e.target.value.split(" ")
            let filterCategory=filterStr[0]
            let filterValue=filterStr[1]
            
             dispatch(filterPokemon({filterCategory,filterValue}))
      }
      const reset=()=>{
        dispatch(clearFilter())
        dispatch(fetchPokemons(0))
       
      }

    return(
        <>
        <div className="filterDiv">
           <div className="clearFilter">

            <h1>Filter</h1>
            <button onClick={reset}>Clear All Filter</button>
           </div>

       <div className="filterCategory">

            <label>Abilities:</label>
            <select  onChange={handleFilterCategory}>
             <option value="">All Abilities</option>
             <option value="ability overgrow">Overgrow</option>
             <option value="ability blaze">Blaze</option>
             <option value="ability battle-armor">Battle_armour</option>
        {/* Other ability options */}
            </select>
            </div>

            <div className="filterCategory">

            <label>Nature:</label>

            <select onChange={handleFilterCategory}>
        <option value="">All Nature</option>
        <option value="nature rash">Rash</option>
        <option value="nature mild">Mild</option>
        <option value="nature bold">Bold</option>
        {/* Other rarity options */}
      </select>
      </div>

      <div className="filterCategory">

      <label>Stats:</label>

      <select  onChange={handleFilterCategory}>
        <option value="">All Stats</option>
        <option value="pokeathlon-stat speed">Speed</option>
        <option value="pokeathlon-stat power">Power</option>
        <option value="pokeathlon-stat stamina">Stamina</option>
        {/* Other rarity options */}
      </select>
      </div>

       <div className="filterCategory">
      <label>Habitate:</label>

      <select  onChange={handleFilterCategory}>
        <option value="">All Habitate</option>
        <option value="pokemon-habitat forest">Forest</option>
        <option value="pokemon-habitat grassland">Grassland</option>
        <option value="pokemon-habitat urban">Urban</option>
        {/* Other rarity options */}
      </select>
      </div>
        </div>
        </>
    )
}
export {Filter}