import { useEffect, useState } from "react"
import "./list.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchPokemons } from "../component/redux/action"
import { Link } from "react-router-dom"
import { Filter } from "../component/filter"

function Home(){
   const [limit,setLimit]=useState(0)
   const dispatch=useDispatch()
   const {pokemonList}=useSelector(state=>state)
   const {filterList}=useSelector(state=>state)
   const [result,setResult]=useState(pokemonList)
   
    const addMorePokemon=()=>{
        setLimit((prevlimit)=>prevlimit+10)
    }

    useEffect(()=>{
        dispatch(fetchPokemons(limit))
    },[dispatch,limit])


    return(
        <>
          <div className="listContainer">
            <Filter />
            {filterList.length==0?
          
          <div className="pokemonData">
            
            {pokemonList.map((item,i)=>(
                <div className="singlePokemon" key={i}>
                 <Link to={`/details/${item.id}`} >

                    <div id="pokemonImage">
                    <img src={item.sprites.front_default} alt={item.name}/>
                    </div>
                    <h2>{item.name}</h2>
                    </Link>
                </div>
            ))}
            
            </div>:<div className="pokemonData">
            
            {filterList.map((item,i)=>(
                <div className="singlePokemon">
                 <Link to={`/details/${item.id}`} >

                    <div id="pokemonImage">
                    <img src={item.sprites.front_default}/>
                    </div>
                    <text>{item.name}</text>
                    </Link>
                </div>
            ))}
            </div>
}

            </div>
            {/* <div > */}
             <button onClick={addMorePokemon} 
             className="loadButton"
             >Load More</button>
             
          {/* </div> */}
        </>
    )
}
export {Home}