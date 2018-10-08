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
         <h1>MyReads</h1>
       <div className="list-books-content">
         {Object.keys(shelves).map((shelf) => 
}
export default ListBooks