// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    statusText: false,
    errorMsg: '',
  }

  onLoginSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({statusText: true, errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onLoginSuccess()
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="username" className="label-name">
          USERNAME
        </label>
        <input
          id="username"
          value={username}
          placeholder="Username"
          className="input-style"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="label-name">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          value={password}
          placeholder="Password"
          className="input-style"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  render() {
    const {statusText, errorMsg} = this.state
    return (
      <div className="login-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="website-login"
        />
        <form className="submit-form" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-form-logo"
          />
          <div className="input-form">{this.renderUsername()}</div>
          <div className="input-form">{this.renderPassword()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {statusText && <p className="error_message">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
