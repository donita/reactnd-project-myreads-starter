import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }


  render() {
    const {onChangeShelf, book} = this.props;
    return (
      <li>
        <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.book.imageLinks?this.props.book.imageLinks.thumbnail:null})` }}></div>
          <div className="book-shelf-changer">
          <select
         onChange={(event) => (
           onChangeShelf(book,event.target.value)
         )}
         value={book.shelf ? book.shelf : 'none'}
         >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors && this.props.book.authors.map(author => author).filter(authors => authors.length > 1)}</div>
        </div>
      </li>
    )
  }
}

export default Book