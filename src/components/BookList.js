import { Component } from "react";

// https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/images/absalom-absalom.jpg (Links to an external site.)

class BookList extends Component{

  render() {

    const bookItems = this.props.books.map((book, index) => {
      return <li key = {index}>
        <b>{book.title}</b>
        <span> by <em>{book.author}</em></span>
        <div class='bookImages'><img src={"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + book.imageLink}></img></div>
        </li>
    })

    return(
      <>
      <h1>Book List</h1>
      <ul>{bookItems}</ul>
      </>
    )
  }
}

export default BookList