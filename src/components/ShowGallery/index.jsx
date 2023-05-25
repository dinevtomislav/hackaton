import React, { useState, useEffect } from 'react';
import { GalleryImage } from '../';
import { Link } from 'react-router-dom';

export default function ShowGallery() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function displayShows() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=222");
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
      {shows.map((pokemon) => (
        <Link to={`/shows/${pokemon.name}`} key={pokemon.name}>
          <GalleryImage data={pokemon} />
        </Link>
      ))}
    </div>
  );
}
