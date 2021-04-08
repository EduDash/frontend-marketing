import React from 'react';

export default function Button(props) {
  return (
    <button
      style={{
        backgroundColor: props.primary ? 'black' : 'white',
        outline: 'none',
        color: props.primary ? 'white' : 'black',
        fontSize: 14,
      }}
      className='rounded-full px-4 py-2 btn-primary'
    >
      {props.children}
    </button>
  );
}
