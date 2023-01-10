import React from "react";
import { Form, Field } from 'react-final-form'
import styles from "./Login.module.css"

const required = value => (value ? undefined : 'Required')


const LoginForm = (props) => {
    return (
        <Form 
            onSubmit={props.onSubmit}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
                    <Field
                        name="login"
                        validate={required}
                    >
                    {({ input, meta }) => ( //в параметрах лежат деструктуризированные пропсы, пришедшие из Field
                        <div className={meta.error && meta.touched && styles.formControl}>
                            <input {...input} type="text" placeholder="Login" /> 
                            {meta.error && meta.touched && <span>{meta.error}</span>} 
                            {/* если нет значения и если поле не тронуто */}
                        </div>
                    )}
                    </Field>
                    <Field
                        name="password"
                        validate={required} //передаст в параметр meta данные из функции required
                    >
                        {({ input, meta }) => ( //в параметрах лежат деструктуризированные пропсы, пришедшие из Field
                        <div className={meta.error && meta.touched && styles.formControl}>
                            <input {...input} type="text" placeholder="Password" /> 
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                    )}
                    </Field>
                    <label>Remember me</label>
                    <Field
                        name="rememberMe"
                        component="input"
                        type="checkbox"
                    >
                    </Field>
                    <button type="submit">Login</button>
            </form>
        )}
        />
    )
};

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }


    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
