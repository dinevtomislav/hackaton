import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components';

export default function ShowPage() {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    async function fetchShow() {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show:', error);
      }
    }

    fetchShow();
  }, [id]);

  if (!show) {
    return <div>Loading...</div>;
  }

  return <ShowCard show={show} />;
}
