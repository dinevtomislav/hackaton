import React from 'react';

export default function ShowCard({ show }) {
  return (
    <div className="show-card">
      <div>
        <img src={show.sprites.front_default} alt={show.name} />
      </div>
      <div>
        <h2>{show.name}</h2>
        <em>Base Experience: {show.base_experience}</em>
        <div>
          Types: {show.types.map((type) => type.type.name).join(', ')}
        </div>
      </div>
    </div>
  );
}
