import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import { useRouter } from 'next/router'

import { login } from '../../store/actions/addAuth';
import { useDispatch } from 'react-redux';

import * as yup from 'yup';
import { useFormik } from 'formik';

const validationSchema = yup.object({
    username: yup
        .string()
        .oneOf(['Admin'])
        .min(5, 'Username not true')
        .required('Username is required'),
    password: yup
        .string()
        .oneOf(['12345'])
        .min(5, 'Password not true')
        .required('Password is required'),
});


const LoginTemplate = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: () => {
            dispatch(login);
            router.push('/profile');
        },
    });
    return (
        <>
            <h1>Login</h1>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '30ch' },
                }}
                onSubmit={formik.handleSubmit}
                noValidate
            >

                <TextField
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                    name="username"
                    label="username"
                    id="outlined-basic"
                    variant="outlined"
                />
                <TextField
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    id="filled-basic"
                    variant="filled"
                />
                <Button variant="contained" type='submit' size="large" style={{ height: '56px' }}>
                    LogIn
                </Button>
            </Box>
        </>


    )
}

export default LoginTemplate