import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
 static propTypes = {
   books: PropTypes.array.isRequired,
   onChangeShelf: PropTypes.func.isRequired
 }

 render () {
   return (
     <div className="bookshelf">
       <h2 className="bookshelf-title">{this.props.title}</h2>
       <div className="bookshelf-books">
         <ol className="books-grid">
       {this.props.books.filter(book => book.shelf === this.props.shelf).map((book, index) => (<Book book={book} key={index} onChangeShelf={this.props.onChangeShelf}/>))}
       
         </ol>
       </div>
     </div>
   )
 }
}

export default BookShelf 