import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  MainContainer,
  CardContainer,
  WebsiteLogo,
  UserLabel,
  UserInputEl,
  InputContainer,
  LoginBtn,
  ErrorParagraph,
  ShowPasswordContainer,
  CheckBoxInput,
} from './styledComponents'

class LoginPage extends Component {
  state = {
    userInput: '',
    userPassword: '',
    errorMsg: '',
    isError: false,
    showPassword: false,
  }

  onChangeInput = event => {
    this.setState({userInput: event.target.value, isError: false})
  }

  onChangePassword = event => {
    this.setState({userPassword: event.target.value})
  }

  getFailureMsg = data => {
    this.setState({errorMsg: data.error_msg, isError: true})
  }

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 2})
    const {history} = this.props
    history.replace('/')
  }

  onChangeCheckbox = event => {
    this.setState({showPassword: event.target.checked})
  }

  onSubmitDetails = async event => {
    event.preventDefault()
    const {userInput, userPassword} = this.state
    const userDetails = {username: userInput, password: userPassword}

    const URL = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(URL, options)
    const data = await response.json()
    if (response.ok) {
      this.onSuccess(data.jwt_token)
      console.log('success')
      console.log(response)
    } else {
      this.getFailureMsg(data)
    }
  }

  render() {
    const {
      userInput,
      userPassword,
      errorMsg,
      isError,
      showPassword,
    } = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    const inputType = showPassword ? 'text' : 'password'
    return (
      <MainContainer>
        <CardContainer>
          <div className="head-container">
            <WebsiteLogo
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
              alt="website logo"
            />
          </div>
          <form className="login-form" onSubmit={this.onSubmitDetails}>
            <InputContainer>
              <UserLabel htmlFor="input1">USERNAME</UserLabel>
              <br />
              <UserInputEl
                placeholder="Username"
                id="input1"
                type="text"
                onChange={this.onChangeInput}
                value={userInput}
              />
            </InputContainer>
            <InputContainer className="input-container">
              <UserLabel htmlFor="input2">PASSWORD</UserLabel>
              <br />
              <UserInputEl
                placeholder="Password"
                id="input2"
                type={inputType}
                onChange={this.onChangePassword}
                value={userPassword}
              />
            </InputContainer>
            <ShowPasswordContainer>
              <CheckBoxInput
                type="checkbox"
                id="checkbox"
                onChange={this.onChangeCheckbox}
              />
              <UserLabel htmlFor="checkbox">Show Password</UserLabel>
            </ShowPasswordContainer>
            <LoginBtn check type="submit">
              Login
            </LoginBtn>
            {isError && <ErrorParagraph>*{errorMsg}</ErrorParagraph>}
          </form>
        </CardContainer>
      </MainContainer>
    )
  }
}

export default LoginPage
