import React from 'react';
import { ShowCard } from '../';

export default function ShowList({ showData }) {
  function renderShows() {
    return showData.map((show) => (
      <ShowCard key={show.id} show={show} />
    ));
  }

  return <div className="show-list">{renderShows()}</div>;
}
