import React from 'react';

export default function(props) {
  const {id, angler, species, length, girth} = props;
  return (
    <div key={id} className='fish-box'>
      <p>
        Angler: {angler}
      </p>
      <p>
        Species: {species}
      </p>
      <p>
        Length: {length}
      </p>
      <p>
        Girth: {girth}
      </p>
    </div>
  )
}