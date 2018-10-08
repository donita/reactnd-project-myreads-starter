import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from './Components/ListBooks'
import SearchBooks from './Components/SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  changeShelf = (book, shelf) => {
   BooksAPI.update(book, shelf)

   BooksAPI.getAll().then((books) => {
     this.setState({ books })
   })
 }
    
  render() {
     const { books } = this.state

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks 
          books={books} 
          onChangeShelf={book, shelf} => {
            this.changeShelf(book, shelf)
          }}
          />
        )}/>
        
        
        <Route path="/search" render={( {history} ) => (
          <SearchBooks 
            books={books}
            onChangeShelf={(book,shelf) => {
              this.changeShelf(book,shelf) => {
                this.changeShelf(book, shelf)
            }}
          />
        )}/>
      </div>
    )
  }
}
export default BooksApp
