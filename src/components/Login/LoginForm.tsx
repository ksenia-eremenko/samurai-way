import React from 'react'
import { Field } from 'redux-form'
import { maxLengthCreator, requiredField } from '../../utils/validators'
import { Input } from '../common/FormsControls/FormsControls'

const maxLength = maxLengthCreator(20);
const LoginForm = (props: any) => {
    return (
        <form action="" onSubmit={props.handleSubmit}>
            <div>
                <Field
                    name="login"
                    type='email'
                    placeholder='Login'
                    component={Input}
                    validate={[requiredField, maxLength]}
                />
            </div>
            <div>
                <Field
                    name="password"
                    type='password'
                    placeholder='Password'
                    component={Input}
                    validate={[requiredField, maxLength]}
                />
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