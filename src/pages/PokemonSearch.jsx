import React from "react";

const PokemonSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredPokemon, setFilteredPokemon] = React.useState([]);

  // Example Pokémon list
  const pokemonList = [
    "Pikachu",
    "Charmander",
    "Bulbasaur",
    "Squirtle",
    "Jigglypuff",
    "Meowth",
    "Snorlax",
    "Eevee",
  ];

  // Handle input change
  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = pokemonList.filter((pokemon) =>
      pokemon.toLowerCase().includes(value)
    );
    setFilteredPokemon(filtered);
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Pokémon Search</h1>
      <input
        type="text"
        placeholder="Search for a Pokémon..."
        value={searchTerm}
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <div style={{ marginTop: "20px" }}>
        {filteredPokemon.length > 0 ? (
          filteredPokemon.map((pokemon, index) => (
            <div key={index} style={{ margin: "10px 0" }}>
              {pokemon}
            </div>
          ))
        ) : searchTerm ? (
          <div>No Pokémon found!</div>
        ) : (
          <div>Start typing to search...</div>
        )}
      </div>
    </div>
  );
};

export default PokemonSearch;
