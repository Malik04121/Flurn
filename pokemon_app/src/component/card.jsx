import { BsBookmark,BsBookmarkFill } from 'react-icons/bs';
import "./component.css"
import { useEffect, useState } from 'react';


function Card({pokemon}){
   const [bookmarked,setBookmarked]=useState(false)
   const bookmarkedData=JSON.parse(localStorage.getItem('bookmarkedData'))||[]

    const addBookmark=()=>{
        setBookmarked(!bookmarked)
    }
    useEffect(()=>{
         const isBookmarked=bookmarkedData.some(item=>item.id==pokemon.id)
            setBookmarked(isBookmarked)
    },[])


    useEffect(()=>{
        if(bookmarked){
            let isDuplicate=false
             isDuplicate = bookmarkedData.some(item => item.id == pokemon.id)
            if(isDuplicate==false){
             bookmarkedData.push(pokemon)
            localStorage.setItem('bookmarkedData', JSON.stringify(bookmarkedData));
            }
        }
        else{
            const filterData = bookmarkedData.filter(item => item.id !== pokemon.id)
            localStorage.setItem('bookmarkedData', JSON.stringify(filterData));
        }
    },[bookmarked,bookmarkedData,pokemon])
   

    return (
        <>
          <div className="card">
             <div className="pokemonTitle">
                <h1>{pokemon.id}</h1>
                <h1>{pokemon.name}</h1>
                <div onClick={addBookmark} >
                {bookmarked ? (
        <BsBookmarkFill color="red" size="3em" />
      ) : (
        <BsBookmark color="black" size="3em" />
      )}
                </div>
             </div>
             <div className="imageBox">

                <img src={pokemon.sprites.front_default} alt="front"/>
                <img src={pokemon.sprites.back_default} alt="back"/>
                <img src={pokemon.sprites.front_shiny} alt="front_shiny"/>
                <img src={pokemon.sprites.back_shiny} alt="back_shiny"/>
             </div>
               <div className="physicalDetailsBox">
                 <div >
                    <h3>Type</h3>
                    <div id="type">
                        {pokemon.types.map((ele)=>(
                           <h4>{ele.type.name}</h4>
                        ))}
                    </div>
                 </div> 
                 <div>
                    <h3>Height</h3>
                    <h4>{pokemon.height} cm</h4>
                 </div>
                 <div>
                    <h3>Weight</h3>
                    <h4>{pokemon.weight} lbs</h4>
                 </div>
               </div>

               <div className="featuresBox">
                   <div>
                   <h3>Stats</h3>
                   {pokemon.stats.map((ele)=>(
                    <div className="statsDiv">
                        <h2>{ele.stat.name}</h2>
                        <h3>{ele.base_stat}</h3>
                    </div>    
                   ))}
                   </div>
                   <div>
                      <h3>Ability</h3>
                      <div className="abilityBox">
                      {pokemon.abilities.map((ele)=>(
                        <h4>{ele.ability.name}</h4>
                      ))}
                      </div>
                   </div>
               </div>
             
          </div>
        </>
    )
}
export { Card}