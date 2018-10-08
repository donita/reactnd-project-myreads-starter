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

    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBooks 
          books={this.state.books} 
          onChangeShelf={this.changeShelf}/>
        )}/>
        <Route path="/search" render={( {history} ) => (
          <SearchBooks 
            books={this.state.books}
            onChangeShelf={(book,shelf) => {
              this.changeShelf(book,shelf);
              history.push('/');
            }}
          />
        )}/>
      </div>
    )
  }
}
export default BooksApp
