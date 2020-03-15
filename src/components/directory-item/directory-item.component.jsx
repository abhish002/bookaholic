import React from 'react';
import './directory-item.styles.scss';

import { ReactComponent as BookPlaceholderImage } from '../../assets/book-svgrepo-com.svg';

export default function DirectoryItem({ display_name, list_image, updated }) {
  return (
    <div className='directory-item'>      
      <img className='directory-item__cover-image' src={list_image} alt='' />      
      <div className='directory-item__list-details'>
        <span className='directory-item__list-details__list-title'>{display_name}</span>
        <span className='directory-item__list-details__list-updated'>Updated: {updated}</span>
      </div>
    </div>
  )
}
