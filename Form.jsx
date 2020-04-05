import React, { Component } from 'react'

export default class componentName extends Component {

    state = {
        username: '', usernameValid: false,
        email: '', emailValid: false,
        password: '', passwordValid: false,
        passwordConfirm: '', passwordConfirmValid: false,
        formValid: false,
        errorMsg: {}
      }

      validateForm = () => {
        const {usernameValid, emailValid, passwordValid, passwordConfirmValid} = this.state;
        this.setState({
          formValid: usernameValid && emailValid && passwordValid && passwordConfirmValid
        })
      }
    

  render() {
    return (
        <div className='form'>
        <header>
        Form Validation
      </header>
      <main role='main'>
        <form action='#' id='js-form'>
          <div className='form-group'>
            <label htmlFor='username'>Username</label>
            < ValidationMessage valid={this.state.usernameValid} message={this.state.errorMsg.username} />
            <input type='text' id='username' name='username' className='form-field'
            value={this.state.username} onChange={(e) => this.updateUsername(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            < ValidationMessage valid={this.state.emailValid} message={this.state.errorMsg.email} />
            <input type='email' id='email' name='email' className='form-field'
            value={this.state.email} onChange={(e) => this.updateEmail(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='password'>Password</label>
            < ValidationMessage valid={this.state.passwordValid} message={this.state.errorMsg.password} />
            <input type='password' id='password' name='password' className='form-field'
            value={this.state.password} onChange={(e) => this.updatePassword(e.target.value)}/>
          </div>
          <div className='form-group'>
            <label htmlFor='password-confirmation'>Password Confirmation</label>
            < ValidationMessage valid={this.state.passwordConfirmValid} message={this.state.errorMsg.passwordConfirm} />
            <input type='password' id='password-confirmation' name='password-confirmation' className='form-field' value={this.state.passwordConfirm} onChange={(e) => this.updatePasswordConfirm(e.target.value)}/>
          </div>
          <div className='form-controls'>
            <button className='button' type='submit' disabled={!this.state.formValid}>Sign Up</button>
          </div>
        </form>
      </main>
    </div>
    )
  }
}
