import React from "react";
import CardDetals from "./CardDetals";
// import toast from "react-hot-toast";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
    // const [pokemons, setPokemons] = React.useState([]);
    const [searchlist, setSearchList] = React.useState("");

    const {
        data: pokemons,
        loading,
        error,
    } = useFetch([], `https://pokeapi.co/api/v2/pokemon?limit=50`);

    // const pokemons = data.results;

    if (loading) {
        return (
            <div>
                <p>Data is commimg.......</p>
            </div>
        );
    }
    if (error) {
        return <div>{error}</div>;
    }

    const filteredPokemon = (pokemons || []).filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchlist.toLowerCase())
    );

    return (
        <div className="pb-20 mt-3 text-center">
            <h1 className="text-4xl font-bold mb-10">Pokemon List</h1>
            <div className="button-section">
                <input
                    type="text"
                    onChange={(e) => setSearchList(e.target.value)}
                    value={searchlist}
                    placeholder="Type here by name"
                    className="input input-bordered w-full max-w-lg p-4 border-radius-lg border-2 border-gray-300 mb-8"
                />
            </div>

            <div className="flex flex-wrap justify-center gap-4">
                {loading ? (
                    <div className="text-2xl shadow-lg p-8 mt-10 text-red-600 font-bold">
                        Loading Pokémons...
                    </div>
                ) : filteredPokemon.length > 0 ? (
                    filteredPokemon.map((pokemon, index) => (
                        <CardDetals key={index} pokemon={pokemon} />
                    ))
                ) : (
                    <h3 className="text-2xl shadow-lg p-8 mt-10 text-red-600 font-bold">
                        No Pokémons Found
                    </h3>
                )}
            </div>
        </div>
    );
}
