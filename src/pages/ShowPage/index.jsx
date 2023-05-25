import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components';

export default function ShowPage() {
  const {id} = useParams();
  const [show, setShow] = useState({url: {}, name: {}})

  useEffect(() => {

    async function displayShow() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const rawData = await response.json();
      setShow(rawData)
    }

    displayShow();

  }, []);

  return (
    <ShowCard show={show}/>
  )
};
