import React from 'react'
import { useFormik } from 'formik';

const initialValues = {
    email: '',
    password: '',
}

const Login = () => {

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        // validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            action.resetForm();
        },
    });
    return (
        <div class="container" style={{ height: '700px', background: 'whiteSmoke' }}>
        <div class='row'>
            <div class="col-lg-6 col-md-6  col-12 col-xxl-6 mx-auto  ">
                <form className='main_sec' >
                    <div className="input-group input-group-lg  textBox my-2">
                        <input type="email" className="form-control" placeholder='Enter Your email' aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg" name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                    </div>
                    <div className="input-group input-group-lg textBox my-2">
                        <input type="password" className="form-control" placeholder='Enter Your password' aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-lg" name='password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur}  />
                    </div>
                    <button type='submit' className='xxl-12 text-center btn btn-outline-success text-center'
                        style={{ marginLeft: '15rem', marginTop: '1rem' }}> Login</button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Login