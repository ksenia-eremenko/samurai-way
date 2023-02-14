import React from 'react'
import { Field } from 'redux-form'

const LoginForm = (props: any) => {
    console.log(props.handleSubmit);
    
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field name="login" type='email' placeholder='Login' component={'input'} />
            </div>
            <div>
                <Field name="password" type='password' placeholder='Password' component={'input'} />
            </div>
            <div>
                <Field name='rememberMe' type='checkbox' component={'input'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

export default LoginForm