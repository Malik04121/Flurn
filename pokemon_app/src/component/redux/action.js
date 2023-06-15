import * as types from "./actionType"
import axios from "axios"

const getPokemons=(pokemonList)=>{
    
    return {
       type:types.GET_POKEMONS,
       payload:pokemonList
    }
}
const searchPokemonRequest=()=>{
    return{
        type:types.SEARCH_POKEMON_REQUEST
    }
}
const searchPokemon=(pokemonDetail)=>{
    return{
        type:types.SEARCH_POKEMON,
        payload2:pokemonDetail
    }
}
const searchPokemonError=(error)=>{
    return{
        type:types.SEARCH_POKEMON_ERROR,
        errorCode:error
    }
}
const filter=(filterdata)=>{
    return {
        type:types.FILTER_POKEMON,
        filterData:filterdata
    }
}
const clearFilter=()=>{
    return {
        type:types.CLEAR_FILTER
    }
}

const fetchPokemons=(start)=>{
    return async(dispatch)=>{
        try{
            let res=await axios(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${start}`)
              let data=res.data.results
            const promises = data.map((pokemon) => fetchPokemon(pokemon));

            // Resolve all promises to get the array of Pokemon data
            const pokemonData = await Promise.all(promises);

            dispatch(getPokemons(pokemonData));
        }
        catch(err){
            console.log(err)
        }
    }
}
const fetchPokemon=async(pokemon)=>{
    try{
    let res= await axios(pokemon.url)
    return res.data
    }
    catch(err){
        console.log(err)
    }

}
const filterPokemon=({filterCategory,filterValue})=>{
    return async(dispatch)=>{
         try{
            let res=await axios(`https://pokeapi.co/api/v2/${filterCategory}/${filterValue}`)
            let data=res.data.pokemon
            const transformedData = data.map(item => {
                return {
                  name: item.pokemon.name,
                  url: item.pokemon.url
                };
              });
              const promises = transformedData.map((pokemon) => fetchPokemon(pokemon));

            // Resolve all promises to get the array of Pokemon data
            const pokemonData = await Promise.all(promises);
            dispatch(filter(pokemonData));

         }
         catch(err){
           console.log(err)
         }
    }
}

const searchPokemons=(name)=>{

    return async(dispatch) => {
        try{
            dispatch(searchPokemonRequest())
          let res=await axios(`https://pokeapi.co/api/v2/pokemon/${name}`)
          dispatch(searchPokemon(res.data))
        }
        catch(err){
            dispatch(searchPokemonError(err.code))
        }
    }
}

export {getPokemons,fetchPokemons,searchPokemon,searchPokemons,searchPokemonError,searchPokemonRequest,filterPokemon,clearFilter} 