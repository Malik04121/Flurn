import { useState } from "react";
import { fetchPokemons, filterPokemon,clearFilter } from "./redux/action";
import { useDispatch } from "react-redux";
import "./component.css"


function Filter(){
    const [filter,setFilter]=useState('')
    
    const [filterType,setFilterType]=useState('')
   const dispatch=useDispatch()
    const [filters, setFilters] = useState({
        type: '',
        rarity: '',
        ability: '',
      });

      const handleFilterCategory=(e)=>{
            let filterStr=e.target.value.split(" ")
            let filterCategory=filterStr[0]
            let filterValue=filterStr[1]
            
             dispatch(filterPokemon({filterCategory,filterValue}))
      }
      const reset=()=>{
        dispatch(clearFilter())
        dispatch(fetchPokemons(0))
        
        console.log("sbjgh")
      }

    const handleAbilityChange = (event) => {
        setFilters({ ...filters, ability: event.target.value });
      };

      const handleRarityChange = (event) => {
        setFilters({ ...filters, rarity: event.target.value });
      };
    return(
        <>
        <div className="filterDiv">
           <div className="clearFilter">

            <h1>Filter</h1>
            <button onClick={reset}>Clear All Filter</button>
           </div>

       <div className="filterCategory">

            <label>Abilities:</label>
            <select value={filters.ability} onChange={handleFilterCategory}>
             <option value="">All Abilities</option>
             <option value="overgrow">Overgrow</option>
             <option value="blaze">Blaze</option>
             <option value="ability battle-armor">Battle_armour</option>
        {/* Other ability options */}
            </select>
            </div>

            <div className="filterCategory">

            <label>Characteristics:</label>

            <select value={filters.rarity} onChange={handleFilterCategory}>
        <option value="">All Characteristics</option>
        <option value="common">Common</option>
        <option value="rare">Rare</option>
        {/* Other rarity options */}
      </select>
      </div>

      <div className="filterCategory">

      <label>Group:</label>

      <select value={filters.rarity} onChange={handleFilterCategory}>
        <option value="">All Group</option>
        <option value="common">Common</option>
        <option value="rare">Rare</option>
        {/* Other rarity options */}
      </select>
      </div>

       <div className="filterCategory">
      <label>Habitate:</label>

      <select value={filters.rarity} onChange={handleFilterCategory}>
        <option value="">All Habitate</option>
        <option value="common">Common</option>
        <option value="rare">Rare</option>
        {/* Other rarity options */}
      </select>
      </div>
        </div>
        </>
    )
}
export {Filter}