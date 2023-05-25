import React, { useState, useEffect } from 'react';
import { SearchForm, ShowList } from '../';

export default function SearchWidget() {
  const [showData, setShowData] = useState([]);
  const [searchString, setSearchString] = useState("");

  useEffect(() => {
    async function searchAPI() {
      try {
        if (searchString.trim() !== "" && searchString.trim().length >= 2) {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchString}`);
          if (response.ok) {
            const data = await response.json();
            setShowData([data]);
          } else {
            setShowData([]);
          }
        } else if (searchString.trim().length === 1) {
          setShowData([{ name: "Search not supported for single letter" }]);
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
}
