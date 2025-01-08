import React, { useEffect } from "react";
import { useParams } from "react-router";

export default function ViewDetals() {
    const [pokemons, setPokemons] = React.useState(null);
    const { pokemonName } = useParams();
    // const {
    //     data: pokemons,
    //     loading,
    //     error,
    // } = useFetch(null, `https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

    const fetchUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    useEffect(() => {
        fetch(fetchUrl)
            .then((response) => response.json())
            .then((data) => {
                setPokemons(data);
            });
    }, [fetchUrl]);

    console.log(pokemons);

    return (
        <div className="m-5 p-5 bg-slate-400 rounded rounded-3xl max-w-4xl mx-auto">
            {pokemons && (
                <div>
                    <h2 className="text-3xl mb-10 text-center text-orange-600 border-b border-orange-600 pb-2 ">
                        Name: {pokemons.name}
                    </h2>
                    <img
                        src={pokemons.sprites.front_default}
                        alt={pokemons.name}
                        className="float-right"
                    />
                    <h3 className="text-2xl">
                        Abilities: {pokemons.abilities.length}
                    </h3>
                    <h3 className="text-2xl">Types: {pokemons.types.length}</h3>
                    <h3 className="text-2xl">
                        Base states: {pokemons.stats.length}
                    </h3>
                </div>
            )}
        </div>
    );
}
