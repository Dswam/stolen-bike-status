import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from '../schema'
import { useNavigate } from 'react-router-dom';


const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
}


const Signup = () => {
    const navigate=useNavigate();

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {

            action.resetForm();
        },
    });


    function alreadyLogin(){

        navigate('/login')

    }
    return (
        <div class="container" style={{ height: '700px', background: 'whiteSmoke' }}>
            <div class='row'>
                <div class="col-lg-6 col-md-6  col-12 col-xxl-6 mx-auto  ">
                    <form className='main_sec' onSubmit={handleSubmit}>
                        <div className="input-group input-group-lg  textBox my-2" >
                            <input type="text" className="form-control" placeholder='Enter Your first Name' aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg" name='firstName' id='firstName' value={values.firstName} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.firstName && touched.firstName ? (<p>{errors.firstName}</p>) : null}
                        <div className="input-group input-group-lg textBox my-2">
                            <input type="text" className="form-control" placeholder='Enter Your Last Name' aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg" name='lastName' id='lastName' value={values.lastName} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.lastName && touched.lastName ? (<p>{errors.lastName}</p>) : null}
                        <div className="input-group input-group-lg  textBox my-2">
                            <input type="email" className="form-control" placeholder='Enter Your email' aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg" name='email' id='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
                        <div className="input-group input-group-lg textBox my-2">
                            <input type="password" className="form-control" placeholder='Enter Your password' aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg" name='password' id='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.password && touched.password ? (<p>{errors.password}</p>) : null}
                        <div className="input-group input-group-lg textBox my-2">
                            <input type="password" className="form-control" placeholder='confirm Your password' aria-label="Sizing example input"
                                aria-describedby="inputGroup-sizing-lg" name='confirmPassword' id='confirmPassword' value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                        </div>
                        {errors.confirmPassword && touched.confirmPassword ? (<p>{errors.confirmPassword}</p>) : null}
                        <button type='submit' className='xxl-12 text-center btn btn-outline-success text-center'
                            style={{ marginLeft: '15rem', marginTop: '1rem' }}> Sign Up</button>
                    </form>
                    <div> 
                    <p >Already have account?</p>
                    </div>
                  <div> 
                 <a href='#' onClick={alreadyLogin()} className='ms-auto' style={{textDecoration:'none' ,color:'blue'}}>Login here</a>
                 </div> 
                </div>
            </div>
        </div>

    )
}

export default Signup