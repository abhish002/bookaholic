import React from 'react';
import './header.styles.scss';

import { Link } from 'react-router-dom';

import { APPLICATION_TITLE } from '../../constants/application.constants';

export default function Header() {
  return (
    <div className='header'>
      <Link className='header__application-title' to='/'>
        <h1>{APPLICATION_TITLE}</h1>
      </Link>
      <div className='header__nav'>
      <Link to='/'>View lists</Link>
      </div>
    </div>
  )
}
