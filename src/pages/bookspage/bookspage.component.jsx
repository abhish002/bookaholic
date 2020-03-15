import React, { Component } from 'react';
import './bookspage.styles.scss';

import PreviewBooks from '../../components/preview-books/preview-books.component';

import { connect } from 'react-redux';
import { getLists } from '../../redux/actions/books.actions';
import { selectLists } from '../../redux/selectors/books.selector';

class BooksPage extends Component {
    // componentDidMount() {
    //     const { lists, getLists } = this.props;
    //     if (lists.length === 0) {
    //         getLists();
    //     }
    // }

    render() {
        console.log(this.props);
        const { match, lists } = this.props;
        const { listId } = match.params;


        console.log(lists)
        const list = lists.filter(list => list.list_id === parseInt(listId));
        console.log(list);

        const { display_name, books } = list[0] || '';

        const filteredBooks = books && books.filter((book, i) => i < 4);

        const previewBooksList = filteredBooks && filteredBooks.map(book => {
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

const mapStateToprops = ({ books }) => ({
    lists: selectLists(books),
});

// const mapDispatchToprops = dispatch => ({
//     getLists: () => dispatch(getLists())
// });

export default connect(mapStateToprops)(BooksPage);

