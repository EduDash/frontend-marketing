import React from 'react';
import { Link } from 'react-router-dom';

export default function NavItem(props) {
  return (
    <div className={'mx-4'}>
      {props.a === true ? (
        <a href={props.to || '/'}>{props.children}</a>
      ) : (
        <Link to={props.to || '/'}>{props.children}</Link>
      )}
    </div>
  );
}
