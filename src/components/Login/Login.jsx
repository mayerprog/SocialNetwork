import React from "react";
import { Form, Field } from 'react-final-form'


const LoginForm = (props) => {
    return (
        <Form 
            onSubmit={props.onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                <div>
                    <Field
                        name="login"
                        component="input"
                        placeholder="Login"
                        type="text"
                    />
                </div>
                <div>
                    <Field
                        name="password"
                        component="input"
                        placeholder="Password"
                        type="text"
                    />
                </div>
                <div>
                    <label>Remember me</label>
                    <Field
                        name="rememberMe"
                        component="input"
                        type="checkbox"
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
                <div />
            </form>
        )}
        />
    )
};

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    console.log('RERENDER')


    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
