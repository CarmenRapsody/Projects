import React from 'react'
import { LoginButton, LoginContainer } from './style'
import { loginURL } from '../spotyLogic'


const Login = () => {
  
  return (
    <div>
      <LoginContainer>
        <img src="https://www.liderlogo.es/wp-content/uploads/2022/12/pasted-image-0-4-1024x576.png" alt="logo"/>
        <LoginButton href={loginURL}>Login with spotify </LoginButton>
      </LoginContainer>
    </div>
  )
}

export default Login
