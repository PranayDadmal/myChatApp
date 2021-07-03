import * as Yup from 'yup';

export const defaultValues =  {
    userName: '',
    email: '',
    password: '',
    confirmPassword: '',
};

export const validationSchema = Yup.object().shape({
    userName: Yup.string().required('Required').matches(/^\S*$/, 'Spaces are not allowed').min(3, 'Must be at least 3 characters'),
    email: Yup.string().email('Email is not valid').required('Required'),
    password: Yup.string().required('Required').min(8, 'Must be at least 8 characters'),
    confirmPassword: Yup.string().required('Required').oneOf([Yup.ref('password'), null], 'Password must be same'),
});