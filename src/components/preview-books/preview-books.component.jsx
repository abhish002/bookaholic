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
  }

  handleMouseLeave = (e) => {
    this.bookDetailsRef.current.classList.add('hide');
  }

  // handleClick = () => {
  //   const { hidden, toggleDetails } = this.props;
  //   toggleDetails();
  //   hidden ?
  //     this.bookDetailsRef.current.classList.add('hide') : this.bookDetailsRef.current.classList.remove('hide');
  // }  

  render() {
    const { book_image, hideClass, ...remainingProps } = this.props;
    return (
      <div className='preview-books'>
        <div className='preview-books__cover-image_container'>
          <img src={book_image} alt='' className='preview-books__cover-image'
            onMouseEnter={this.handleMouseEnter}
            onMouseLeave={this.handleMouseLeave}
            onTouchStart={this.handleMouseEnter}
          />
        </div>
        <div className={'preview-books__book-details hide'} ref={this.bookDetailsRef} onf>
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


