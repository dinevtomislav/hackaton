import React, { useState, useEffect } from 'react';
import { SearchForm, ShowList } from '../';

const SearchWidget = () => {
  const [showData, setShowData] = useState([]);
  const [searchString, setSearchString] = useState('');

  useEffect(() => {
    async function searchAPI() {
      try {
        if (searchString.trim() !== "" && searchString.trim().length >= 1) {
          const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1015');
          const data = await response.json();
          const results = data.results;
          const filteredResults = results.filter((result) =>
            result.name.includes(searchString.toLowerCase())
          );

          const pokemonData = await Promise.all(filteredResults.map(async (result) => {
            const res = await fetch(result.url);
            return res.json();
          }));

          setShowData(pokemonData);
        } else {
          setShowData([]);
        }
      } catch (error) {
        console.error('Error searching API:', error);
        setShowData([]);
      }
    }

    searchAPI();
  }, [searchString]);

  function handleSearch(userInput) {
    setSearchString(userInput);
  }

  return (
    <>
      <SearchForm handleSearch={handleSearch} lastSearch={searchString} />
      <ShowList showData={showData} />
    </>
  );
};

export default SearchWidget;
