import React from 'react'
import { reduxForm } from 'redux-form';
import LoginForm from './LoginForm';

const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData);
    
  }
  return (
    <>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </>
  )
}
const LoginReduxForm = reduxForm({
  form: 'login'
})(LoginForm)

export default Login;