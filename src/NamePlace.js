import { Component } from "react";

class NamePlace extends Component{

  constructor() {
    super()

    this.state = {
      name: '',
      favoritePlace: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return(
      <>
        <h1>Name and Favorite Place</h1>
        <input type='text' name="name" onChange={this.handleChange} placeholder='name'></input>
        <input type='text' name="favoritePlace" onChange={this.handleChange} placeholder='favorite place'></input>
      </>
    )
  }
}

export default NamePlace