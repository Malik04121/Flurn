import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchPokemonRequest, searchPokemons } from "../component/redux/action"

function Search(){
    const [inputValue,setInputValue]=useState("")
    const dispatch=useDispatch()
    const {loading,pokemon,error,errorType}=useSelector((state)=>state)

    const getInput=(e)=>{
        setInputValue(e.target.value)
    }
    const searchPokemon=()=>{    
        dispatch(searchPokemons(inputValue))
    }

    return(
        <>
          <div className="searchContainer">
            <div>
                <input onChange={getInput}/>
                <button onClick={searchPokemon}>Search</button>
            </div>
            {loading?<div>...Loading</div>:error?<div>{errorType}</div>:<div>{pokemon.height}</div>}
          </div>
        </>
    )
}
export {Search}