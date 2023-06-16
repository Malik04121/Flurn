import { useEffect, useState } from "react";
import "./list.css"
import {AiFillDelete  } from 'react-icons/ai';

function Bookmark(){
    const [pokemonList,setPokemonList]=useState([])

    const removeHandler=(item)=>{
         console.log(item)
         const updateList=pokemonList.filter(pokemon=>pokemon.id!=item.id)
         localStorage.setItem('bookmarkedData', JSON.stringify(updateList))
         setPokemonList(updateList)
         
    }
    useEffect(()=>{
    const data=JSON.parse(localStorage.getItem('bookmarkedData'))
    setPokemonList(data)
          
    },[])

    return(
        <>
         <div className="bookmarkedData">
            
            {pokemonList.map((item,i)=>(
                <div className="singleBookmarkedData" key={i}>
                 {/* <Link to={`/details/${item.id}`} > */}

                    <div id="pokemonImage">
                    <img src={item.sprites.front_default} alt={item.name}/>
                    </div>
                    <h2>{item.name}</h2>
                    <div className="removeBox" onClick={()=>removeHandler(item)}>
                        <AiFillDelete size="1.5em"/>
                        <h3>Remove</h3>
                     </div>   
                    {/* </Link> */}
                </div>
            ))}
            
            </div>
        </>
    )
}
export {Bookmark}