import React from 'react';

export default function(props) {
  const {id, angler, species, length, girth, weight} = props;
  return (
    <div key={id} className='fish-box'>
      <p>
        Angler: {angler}
      </p>
      <p>
        Species: {species}
      </p>
      <p>
        Length: {length}"
      </p>
      <p>
        Girth: {girth}"
      </p>
      {weight ? (
        <p>
          Weight: {weight} oz
        </p>
      ) : null}
    </div>
  )
}