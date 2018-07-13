import React from 'react';
import Column from './column';
import FishList from './fishList';

export default function(props) {
  return (
    <Column className='col-md-4'>
      <h3>All Fish</h3>
      <FishList catfish={props.catfish} />
    </Column>
  )
}