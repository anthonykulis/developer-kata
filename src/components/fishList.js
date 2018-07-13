import React, {Fragment} from 'react';
import FishCard from './fishCard';

export default function(props) {
  const {catfish} = props;
  return (
    <Fragment>
      {catfish.map(fish => {
        return <FishCard {...fish} key={fish.id} />
      })}
    </Fragment>
  )
}