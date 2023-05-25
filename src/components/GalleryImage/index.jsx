import React, { useState, useEffect } from 'react';

export default function GalleryImage({ data }) {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    async function fetchPokemonData() {
      try {
        const response = await fetch(data.url);
        const pokemonData = await response.json();
        setPokemonData(pokemonData);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
      }
    }

    fetchPokemonData();
  }, [data.url]);

  return (
    <div className='gallery-image'>
      {pokemonData ? (
        <>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <p>{pokemonData.name}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
