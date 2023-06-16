import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { searchPokemonRequest, searchPokemons } from "../component/redux/action"
import { Card } from "../component/card"
import "./list.css"

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
            <div className="searchDiv">
                <input onChange={getInput}/>
                <button onClick={searchPokemon}>Search</button>
            </div>
            {loading?<div className="searchStatus">...Loading</div>:error?<div className="searchStatus">{errorType}</div>: <div >
        {Object.keys(pokemon).length > 0 && (
            <Card pokemon={pokemon}/>
        )}
        </div>}
          </div>
        </>
    )
}
export {Search}