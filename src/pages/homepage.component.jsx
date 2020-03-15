import React from 'react';

import './homepage.styles.scss';

import Directory from '../components/directory/directory.component';

export default function HomePage() {
  return (
    <div className='home-page'>
      <Directory />
    </div>
  )
}
