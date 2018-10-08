import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import BookShelf from './BookShelf'

class ListBooks extends Component {
  static propTypes = {
     books: PropTypes.array.isRequired,
     onChangeShelf: PropTypes.func.isRequired
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
               <BookShelf
                 books={books("currentlyReading")}
                 shelf="Currently Reading"
                 onChangeShelf={onChangeShelf}
               />
               <BookShelf
                 books={books("wantToRead")}
                 shelf="Want to Read"
                 onChangeShelf={onChangeShelf}
               />
               <BookShelf
                 books={books("read")}
                 shelf="Read"
                 onChangeShelf={onChangeShelf}
               />
             </div>
           </div>
           <div className="open-search">
             <Link to="/search">Add a book</Link>
           </div>
         </div>
       );
     }
}
export default ListBooks