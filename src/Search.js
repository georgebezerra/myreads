import React, { Component } from 'react'
import                           './App.css'
import PropTypes            from 'prop-types'
import { Link }             from 'react-router-dom'
import * as BooksAPI        from './BooksAPI'
//import escapeRegExp         from 'escape-string-regexp'
//import sortBy               from 'sort-by'

export default class SearchBooks extends Component {
  static propTypes = {
    books         : PropTypes.array.isRequired,
    onChangeShelf : PropTypes.func.isRequired,
  }
    state = {
      query:'',
      vazio: [],
      result: [],
    }

//O QUE FALTA PARA CONCLUIR O PROJETO - É FAZER AS ESTANTES ESTAREM SELECIONADAS CONFORME O CORRESPONDENTE.
    updateQuery = (query) => {
      this.setState({ query })
        if(query.trim().length){
          BooksAPI.search(query.trim()).then((result)=> {                               console.log("Pesquisa : ", result)

           const withShelf = this.props.books
           const booksCR   = withShelf.filter(book => book.shelf === 'currentlyReading')
           const booksWR   = withShelf.filter(book => book.shelf === 'wantToRead')
           const booksRead = withShelf.filter(book => book.shelf === 'read')

             const resultBooks = result.map(resultBook  => {                            console.log("withoutShelf : ", resultBook)
               const book = withShelf.find(withShelf => withShelf.id === resultBook.id, console.log("withShelf : ", withShelf)) !== book
                   ? booksCR
                   : resultBook.shelf = 'none'

                return resultBook
              })
           this.setState({ result : resultBooks })
          }).catch(error => console.log(error));
        }
      }

  render() {
     const { query, result, vazio }   = this.state
     const { onChangeShelf }   = this.props
  // const { books }   = this.props

     const allBooks = query === '' ? vazio : result
     const noCover = 'url("")'

  //   const showingBooks = allBooks.filter()

    return (
      <div className="list-books">
        <div className="list-books-title">
            <h1>Search of Books</h1>
        </div>
          <div className="list-books-content">
             <div className='search-books-bar'>
                <input className   = 'search-books-bar'
                       type        = "text"
                       placeholder = "Search by title"
                       value       = {query}
                       onChange    = {(event) => this.updateQuery(event.target.value)}
                 />
               </div>
           </div>
      <div><Link to='/'>Home</Link></div>
      <ol className="books-grid">
        {allBooks.map((book) => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover})`}}></div>
                  <div className="book-shelf-changer">
                    <select value={book.shelf} onChange={(event) => onChangeShelf(event, book)}>
                      <option value="move" disable="true">Move to...</option>
                      <option value="currentlyReading">Currently Reading</option>
                      <option value="wantToRead">Want to Read</option>
                      <option value="read">Read</option>
                      <option value="none">None</option>
                    </select>
                  </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
      </ol>
    </div>
    )
  }
}
