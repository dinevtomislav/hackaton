import React, { useState, useEffect } from 'react';
import { GalleryImage } from '../';
import { Link } from 'react-router-dom';

export default function ShowGallery() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function displayShows() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100");
        const data = await response.json();
        const showData = data.results;
        setShows(showData);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      }
    }

    displayShows();
  }, []);

  return (
    <div className='shows'>
      {shows.map((pokemon, index) => (
        <Link to={`/pokemon/${index + 1}`} key={pokemon.name}>
          <GalleryImage data={pokemon} />
        </Link>
      ))}
    </div>
  );
}
