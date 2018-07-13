import React from 'react';
import FishList from './fishList';

export default function(props) {
  return (
    <div className='col-md-4'>
      <h3>All Fish</h3>
      <FishList catfish={props.catfish} />
    </div>
  )
}