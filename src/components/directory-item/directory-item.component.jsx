import React from 'react';
import './directory-item.styles.scss';

import { Link, withRouter } from 'react-router-dom';

export default function DirectoryItem({ list_id, display_name, list_image, updated, history, match }) {
  return (
    <div className='directory-item'>
      <Link to={`/books/${list_id}`}>
        <img className='directory-item__cover-image' src={list_image} alt='' />
      </Link>
      <div className='directory-item__list-details'>
        <span className='directory-item__list-details__list-title'>{display_name}</span>
        <span className='directory-item__list-details__list-updated'>Updated: {updated}</span>
      </div>
    </div>
  )
}

