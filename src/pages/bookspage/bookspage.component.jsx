import React, { Component } from 'react';
import './bookspage.styles.scss';

import PreviewBooks from '../../components/preview-books/preview-books.component';

import { connect } from 'react-redux';
import { getLists } from '../../redux/actions/books.actions';

class BooksPage extends Component {
    componentDidMount() {
        const { lists, getLists } = this.props;
        if (lists.length === 0) {
            getLists();
        }
    }

    render() {
        console.log(this.props);
        const { match, lists } = this.props;
        const { listId } = match.params;


        console.log(lists)
        const list = lists.filter(list => list.list_id === parseInt(listId));
        console.log(list);

        const { display_name, books } = list[0];

        const previewBooksList = books.map(book => {
            const { book_uri } = book;
            return (
                <PreviewBooks key={book_uri} {...book} />
            )
        });

        return (
            <div className='books-page'>
                <h1 className='books-page__list-name'>{display_name}</h1>
                {previewBooksList}
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

export default connect(mapStateToprops, mapDispatchToprops)(BooksPage);

