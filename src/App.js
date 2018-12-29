import React         from 'react'
import { Route }     from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import                    './App.css'
import Search        from './Search.js'
import BookShelf     from './BookShelf'

export default class BooksApp extends React.Component {
  state = {
    books : [],
  }

  //Método para buscar livros da API com shelf definida
componentDidMount() {
  BooksAPI.getAll().then((books) => {  console.log('Livros: ', books)
   this.setState(() => ({books}))
     }).catch(error => console.log(error));
}

//Método para atualizar as estantes
bookUpdateShelf = () => {
    BooksAPI.getAll().then((books) =>{ console.log('EstandesAtualizadas', books)
      this.setState({books})
    }).catch(error => console.log(error));
  }

//Método para mudar de estantes
handleChangeShelf = (event, bookToUpdate) => {
  const shelf = event.target.value
  bookToUpdate.shelf = shelf
    BooksAPI.update(bookToUpdate, shelf).then(() => {
      this.bookUpdateShelf()
    }).catch(error => console.log(error));
}

 book = (books) => {
  if (books.shelf === 'currentlyReading')  {                 console.log('Lendo atualmente : ')
        return books.filter(book => book.shelf === 'currentlyReading')

 } else if (books.shelf === 'wantToRead') {                 console.log('Quero ler: ')
        return  books.filter(book => book.shelf === 'currentlyReading')

 } else if (books.shelf === 'read') {                       console.log('Ler : ')
        return books.filter(book => book.shelf === 'read')

 } else {
        return books.shelf = 'none'
 }
}

  render() {
    return (
      <div>
          <Route exact path='/' render={() => ( <BookShelf bookEstantes = {this.book} books = {this.state.books} onChangeShelf = {this.handleChangeShelf} />)} />
          <Route path='/search' render={() => ( <Search    books = {this.state.books} onChangeShelf = {this.handleChangeShelf} /> )} />
      </div>
    )
 }
}
