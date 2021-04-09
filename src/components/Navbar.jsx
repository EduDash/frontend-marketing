import React from 'react';
import Logo from '../Logo_WB.svg';
import Button from './Button';
import NavItem from './NavItem';
import { Link } from 'react-router-dom';
import NavDropdown from './NavDropdown';
import { useState } from 'react';

export default function Navbar() {
  let [productsShowing, setProductsShowing] = useState(false);
  return (
    <nav
      className='w-full h-20 flex justify-around items-center px-40'
      style={{
        zIndex: 1000000,
        boxShadow: '0 1px 1px rgb(0 0 0 / 1%), 0 10px 30px rgb(0 0 0 / 8%)',
      }}
    >
      <div className='flex w-full items-center'>
        <div className='flex items-center h-full'>
          <Link to='/' onClick={() => setProductsShowing(!productsShowing)}>
            <img
              src={Logo}
              alt='edudash'
              style={{ userSelect: 'none', height: 35 }}
            />
          </Link>
        </div>
        <div className='flex justify-start h-full items-center px-8'>
          <NavItem to='/features'>Products</NavItem>
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

      <NavDropdown showing={productsShowing}>
        <div className='flex justify-center items-center h-80'>
          <h1>Test</h1>
        </div>
      </NavDropdown>
    </nav>
  );
}
