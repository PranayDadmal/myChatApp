import { useState } from 'react';
import  { useHistory }  from 'react-router-dom';
import { Formik, Form } from 'formik';
import { defaultValues, validationSchema } from './formikConfig';
import  { FormField }  from 'components/FormField/FormField';

 export const Signup = () => {
     const history = useHistory();
     const [serverError, setServerError] = useState('');
     const submit = ({userName,email,password}, {setSubmitting}) => {
         return(
            console.log('credentials :', userName ,email, password )
         );
     };
          
    return (
        <div className="auth-form">
           <h1>Sign Up</h1> 
           <Formik onSubmit={submit}
                   validateOnMount={true} 
                   initialValues={defaultValues}
                   validationSchema={validationSchema}>
               
               {({ isValid, isSubmitting }) => (
                <Form>
                   <FormField name="userName" label="User Name" />
                   <FormField name="email" label="Email" type="email" />
                   <FormField name="password" label="Password" type="password" />
                   <FormField name="confirmPassword" label="Confirm Password" type="password" />
  
                   <div className="auth-link-container">
                       Do you have an account? {' '}
                       <span className="auth-link" onClick={() => history.push('login')}>Log In</span>
                   </div>

                   <button disabled={isSubmitting || !isValid} type="submit">Sign Up</button>
                </Form>
               )}
           </Formik>
           {!!serverError && <div className="error">{serverError} </div>}
        </div>
    );
};


