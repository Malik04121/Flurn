
function Card({pokemon}){

    return (
        <>
          <div>
             <div>
                <h2>{pokemon.id}</h2>
                <h2>{pokemon.name}</h2>
             </div>
             <div>

                <img src={pokemon.sprites.front_default}/>
                <img src={pokemon.sprites.back_default}/>
                <img src={pokemon.sprites.front_shiny}/>
                <img src={pokemon.sprites.back_shiny}/>
             </div>
             <div>
                
                <div>
                    <div>
                        <h4>Type</h4>
                        <text></text>
                    </div>
                    <div>
                        <h4>Height</h4>
                        <text>{pokemon.height}</text>
                    </div>
                    <div>
                        <h4>Weight</h4>
                        <text>{pokemon.weight}</text>
                    </div>
                </div>
                <div></div>
             </div>
          </div>
        </>
    )
}
export { Card}