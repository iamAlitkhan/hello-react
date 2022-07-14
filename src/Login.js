import { Component } from "react";


class Login extends Component {

  constructor() {
    super() 

    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsernameChanged = (e) => {
    console.log(e.target.value)
    this.setState({
      username: e.target.value
    })
    console.log('handleUsernameChanged')
  }

  handleChange = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

    return(

      <div>
        <h1>Login</h1>
        <input type='text' name="username" onChange={this.handleChange} placeholder="username"></input>
        <input type="password" name="password" onChange={this.handleChange} placeholder="password"></input>
        <button>Login</button>
      </div>
    )
  }
}

export default Login