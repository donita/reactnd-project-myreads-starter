import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class ListBooks extends Component {

  changeShelf = (event, book) => {
    this.props.updateBookShelf(book, event.target.value)
  }

  render() {
    const {books, onChangeShelf} = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <Book 
                  shelf="currentlyReading"
                  books={books} 
                  toggleBookShelf={this.changeShelf}
                />
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <Book 
                  shelf="wantToRead"
                  books={books}
                  toggleBookShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <Book 
                  shelf="read"
                  books={books}
                  toggleBookShelf={this.changeShelf}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBooks