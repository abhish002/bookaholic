import React from 'react';
import './book-details.styles.scss';

export default function BookDetails({ age_group, amazon_product_url, author, contributor, created_date, updated_date, description, rank, title, weeks_on_list }) {
  return (
    <div className='book-details'>
      <h1>{title}</h1>
      <span><b>Author:</b> {author}</span>
      <span><b>Contributor:</b> {contributor}</span>
      <span><b>Description:</b> {description}</span>
      <span><b>Rank:</b> {rank}</span>
      <span><b>Created Date:</b> {created_date}</span>
      <span><b>Updated Date:</b> {updated_date}</span>
      <span><b>Weeks on list:</b> {weeks_on_list}</span>
      <span><a href={amazon_product_url}>Buy on Amazon</a></span>
    </div>
  )
}


