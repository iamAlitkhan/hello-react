import { Component } from "react";
import Login from "./Login";
// import DisplayCounter from "./DisplayCounter";
import Stepper from "./Stepper";
// import SwitchView from "./SwitchView";
import NamePlace from "./NamePlace";
import BookList from "./components/BookList";

import './App.css'

class App extends Component {

  constructor() {
    console.log('constructor')
    super()
    // this.counter = 0

    this.state = {
      counter: 0,
      books: []
    }


    this.handleIncrement = this.handleIncrement.bind(this)
  }

  async componentDidMount() {
    let response = await fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    let books = await response.json()
    this.setState({
      books: books
    })
    console.log(books)
    // fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    // .then(response => response.json())
    // .then(books => {
    //   console.log(books)
    // })
  }

  handleIncrement = () => {
    console.log(this)
    // this.counter += 1
    // this.state.counter += 1
    // setState automatically calls the render function
    this.setState({
      counter: this.state.counter + 1
    }, () => {
      console.log(this.state.counter)
    })

    console.log(this.state.counter)
  }

  handleDecrement = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {

    console.log('render')

    return(
      <>
      <h1>{this.state.counter}</h1>
      <button onClick = {this.handleIncrement}>Increment</button>
      <p></p>
      <button onClick = {this.handleDecrement}> - </button>
      <span>{this.state.counter}</span>
      <button onClick = {this.handleIncrement}> + </button>
      <Stepper />
      <Login />
      <NamePlace />
      <BookList books = {this.state.books} />
      </>
    )
  }
}

export default App

/////////////////////////

// SwitchView.js code
// import {Component} from 'react'

// class SwitchView extends Component {

//   constructor() {
//     super()

//     this.state = {
//       switch: 'ON'
//     }
//   }

//   changeSwitch = () => {
//     this.setState({
//       switch: "OFF"
//     })
//   }

//   render() {

//     return (
//       <>
//       <h1>{this.state.switch}</h1>
//       <button onClick = {this.changeSwitch}>click</button>
//       </>
//     )
//   }
// }

// export default SwitchView

/////////////

