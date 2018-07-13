import React from 'react';

export default function(props) {
  return (
    <div className={`${props.className} row`}>
      {props.children}
    </div>
  )
}