import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from '../BooksAPI'
import Book from './Book'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired,
  }

  state = {
    query: '',
    results: [],
  }

  searchBooks = (query) => {
    if (query) {
      BooksAPI.search(query.trim()).then(books => {
      if (books) {
        this.setState({results: this.onChangeShelf(books, this.props.books)})
      } else {
        this.setState({results: []})
      }
    })
    } else {
      this.setState({results: []})
    }
  }




  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  render() {
    const { books, onChangeShelf } = this.props
    const { query, results } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >Close</Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"

              onChange={(event) => {
                this.updateQuery(event.target.value)
                this.searchBooks(event.target.value)
              }}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {results.length > 0 && results.map((book) => (
              <Book
                key={ book.id }
                book={ books.find((a) => (a.id === book.id)) ? books.find((a) => (a.id === book.id)) : book }
                onChangeShelf={ onChangeShelf }
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks