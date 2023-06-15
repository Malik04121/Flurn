import * as types from "./actionType"
const initialState={
   pokemonList:[],
   loading:false,
   error:false,
   pokemon:"",
   errorType:"",
   filterList:[]
//    start:0
}

const reducer=(state=initialState,action)=>{
    const {type,payload,payload2,errorCode,filterData}=action
    switch(type){
        case types.GET_POKEMONS:
            console.log(payload)
            return {
                ...state,
                // pokemonList:payload,
                
                pokemonList:[...state.pokemonList,...payload]
            }
        case types.SEARCH_POKEMON_REQUEST:
            return{
               ...state,
               loading:true
            }
        case types.SEARCH_POKEMON:
            return{
                ...state,
                loading:false,
                error:false,
                pokemon:payload2
            }
        case types.SEARCH_POKEMON_ERROR:
                return{
                    ...state,
                    loading:false,
                    error:true,
                    errorType:errorCode
                }
        case types.FILTER_POKEMON:
           console.log(filterData,'kngjerutiwe')    
        return{
                ...state,

                filterList:filterData
                // pokemonList:[...state.filterList,filterData]
                
            }
        case types.CLEAR_FILTER:
            return{
                ...state,
                filterList:[]
            }
        default :
        return state
    }
}
export {reducer}