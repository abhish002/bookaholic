import React, { Component } from 'react'
import './preview-books.styles.scss';

import BookDetails from '../book-details/book-details.component';

import { connect } from 'react-redux';
import { toggleDetails } from '../../redux/actions/books.actions';

class PreviewBooks extends Component {
  render() {
    const { book_image, hidden, toggleDetails, ...remainingProps } = this.props;
    return (
      <div className='preview-books'>
        <img src={book_image} alt='' className='preview-books__cover-image' />
        <button className='preview-books__details-button' onClick={() => toggleDetails()}>
          {hidden ? 'Details' : 'Hide details'}
        </button>
        {hidden ? '' : <BookDetails {...remainingProps} />}
      </div>
    )
  }
}

const mapStateToprops = ({ books: { hidden } }) => ({
  hidden,
});

const mapDispatchToprops = dispatch => ({
  toggleDetails: () => dispatch(toggleDetails())
});

export default connect(mapStateToprops, mapDispatchToprops)(PreviewBooks);


