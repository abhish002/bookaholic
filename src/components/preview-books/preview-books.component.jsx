import React, { Component } from 'react'
import './preview-books.styles.scss';

import BookDetails from '../book-details/book-details.component';

import { connect } from 'react-redux';

class PreviewBooks extends Component {
  constructor(props) {
    super(props);
    this.bookDetailsRef = React.createRef();
  }

  handleMouseEnter = (e) => {
    this.bookDetailsRef.current.classList.remove('hide');
    this.bookDetailsRef.current.focus();
  }

  handleMouseLeave = (e) => {
    this.bookDetailsRef.current.classList.add('hide');
  } 

  render() {
    const { book_image, hideClass, ...remainingProps } = this.props;
    return (
      <div className='preview-books'>
        <div className='preview-books__cover-image_container'>
          <img src={book_image} alt='' className='preview-books__cover-image'
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
          />
        </div>
        <div className={'preview-books__book-details hide'} ref={this.bookDetailsRef} >
          <BookDetails {...remainingProps} />
        </div>
      </div>
    )
  }
}

const mapStateToprops = ({ books: { hidden } }) => ({
  hidden,  
});

export default connect(mapStateToprops)(PreviewBooks);


