import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'

class ListBooks extends Component {
  static propTypes = {
     books: PropTypes.array.isRequired,
  }

  render() {
    const {books, onChangeShelf} = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          
    )
  }
}

export default ListBooks