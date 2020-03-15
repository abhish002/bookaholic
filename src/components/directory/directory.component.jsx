import React, { Component } from 'react';
import './directory.styles.scss';

import DirectoryItem from '../directory-item/directory-item.component';

import { connect } from 'react-redux';
import { getLists } from '../../redux/actions/books.actions';

class Directory extends Component {
  componentDidMount() {
    this.props.getLists();
  }

  render() {
    const directoryItems = this.props.lists.map(({ list_id, ...otherProps }) => {
      return (
        <DirectoryItem key={list_id} {...otherProps} />
      )
    })
    return (
      <div className='directory'>
        {directoryItems}
      </div>
    )
  }
}

const mapStateToprops = ({ books: { lists } }) => ({
  lists,
});

const mapDispatchToprops = dispatch => ({
  getLists: () => dispatch(getLists())
});

export default connect(mapStateToprops, mapDispatchToprops)(Directory)
