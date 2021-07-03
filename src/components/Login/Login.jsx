import { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { FormField } from 'components/FormField/FormField';
import { defaultValues, validationSchema } from './formikConfig';

export const Login = () => {
    const history = useHistory();
    const [serverError, setServerError] = useState('');
    const submit = ({email,password}, {setSubmitting}) => {
        return (
            console.log('credentials:',email,password)
        );
    };
    return (
        <div className="auth-form">
            <h1>Login</h1>
            <Formik onSubmit={submit}
                    validateOnMount={true}
                    initialValues={defaultValues}
                    validationSchema={validationSchema}>
             
             {({isValid,isSubmitting}) => (
                 <Form>
                     <FormField name="email" label ="Email" type="email" />
                     <FormField name="password" label="Password" type="password" />

                     <div className="auth-link-container">
                         Don't have an account? {' '}
                         <span className="auth-link" onClick={() => history.push('signup')}>Sign Up</span>
                     </div>
                     <button disabled={isSubmitting || !isValid} type="submit">Login</button>
                 </Form>
             )}
            </Formik>
            {!!serverError && <div className="error">{serverError} </div>}
        </div>
    )
};


