import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from '../schema'


const initialValues = {
  email: '',
}


const Contact = () => {



  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit: (values, action) => {

        action.resetForm();
    },
});


  return (

    <div class="container" style={{ height: '700px', background: 'whiteSmoke' }}>
      <div class='row'>
        <div class="col-lg-6 col-md-6  col-12 col-xxl-6 mx-auto  ">
          <form className='main_sec' onSubmit={handleSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your email"
              name='email'  value={values.email} onChange={handleChange} onBlur={handleBlur}  />
            </div>
            {errors.email && touched.email ? (<p>{errors.email}</p>) : null}
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Write about Us</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="mb-3">
              <label for="formFile" class="form-label">input suggested file</label>
              <input class="form-control" type="file" id="formFile" />
            </div>
            <button type='submit' className='xxl-12 text-center btn btn-outline-success text-center'
              style={{ marginLeft: '15rem', marginTop: '1rem' }}> Contact Us</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Contact