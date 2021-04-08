import React from 'react';
import Logo from '../Logo_WB.svg';
import Button from './Button';
import NavItem from './NavItem';

export default function Navbar() {
  return (
    <nav
      className='w-full h-16 flex justify-around items-center px-12'
      style={{
        zIndex: 1000000,
        boxShadow: '0 1px 1px rgb(0 0 0 / 1%), 0 10px 30px rgb(0 0 0 / 8%)',
      }}
    >
      <div className='flex w-full'>
        <div className='flex items-center h-full'>
          <img
            src={Logo}
            alt='edudash'
            style={{ userSelect: 'none', height: 25 }}
          />
        </div>
        <div className='flex justify-start h-full items-center px-8'>
          <NavItem to='/features'>Features</NavItem>
          <NavItem to='/pricing'>Pricing</NavItem>
          <NavItem to='/solutions'>Solutions</NavItem>
          <NavItem a to='https://docs.edudash.org'>
            Docs
          </NavItem>
        </div>
      </div>

      <div className='flex justify-around h-full items-center'>
        <Button primary>Login</Button>
      </div>
    </nav>
  );
}
