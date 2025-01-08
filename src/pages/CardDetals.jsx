import { Link } from "react-router";
import { useEffect, useState } from "react";

export default function CardDetals({ pokemon }) {
    const [cardPokemon, setCardPokemons] = useState(null);

    useEffect(() => {
        fetch(pokemon.url)
            .then((response) => response.json())
            .then((data) => {
                setCardPokemons(data);
            });
    }, [pokemon.url]);

    const setFavourite = (data) => {
        let favoriteList = localStorage.getItem("favoriteList");

        // Initialize an empty array if no favorites are found
        if (!favoriteList) {
            favoriteList = [];
        } else {
            favoriteList = JSON.parse(favoriteList);
        }

        // Check if the item is already in the favorite list by comparing the name
        const isDuplicate = favoriteList.some((item) => item.name === data.name);

        // Only add the Pokémon if it's not already in the list
        if (!isDuplicate) {
            favoriteList.push(data);
            localStorage.setItem("favoriteList", JSON.stringify(favoriteList));
        }
    };

    return (
        <div className="cardDetals">
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    {cardPokemon ? (
                        <img
                            src={cardPokemon.sprites.back_default}
                            alt={pokemon.name}
                        />
                    ) : (
                        <p>Loading...</p>
                    )}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{pokemon.name}</h2>

                    <div className="card-actions flex justify-between">
                        <button
                            className="btn btn-primary"
                            onClick={() =>
                                setFavourite({
                                    name: pokemon.name,
                                    url: cardPokemon.sprites.back_default,
                                })
                            }
                        >
                            Favourite
                        </button>

                        <Link to={`/pokemon/${pokemon.name}`}>
                            <button className="btn btn-primary">
                                View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
