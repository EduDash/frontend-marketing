import React from 'react';

export default function NavDropdown(props) {
  return (
    <div
      className={
        props.showing === true
          ? 'w-full top-20 absolute flex justify-center items-center max-h-screen visible border-t border-gray-400'
          : 'top-20 absolute items-center flex w-full max-h-0 invisible overflow-y-hidden justify-center'
      }
      style={{
        transition: 'visibility 250ms ease, max-height 250ms ease',
        backgroundColor: 'white',
        zIndex: 1000,
        boxShadow: props.showing
          ? '0 1px 1px rgb(0 0 0 / 1%), 0 10px 30px rgb(0 0 0 / 8%)'
          : 'none',
      }}
    >
      <div className='px-40'>{props.children}</div>
    </div>
  );
}
