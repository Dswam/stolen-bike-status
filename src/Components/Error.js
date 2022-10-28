import React from 'react'
import { useNavigate } from 'react-router-dom';
import errorImage from '../image/404error.webp'

const Error = () => {
  const navigate = useNavigate();
  const  goToHome=()=>{

    navigate("/")
  }
  return (
    <div>

    
        <div className="hero">
          <div className="card bg-dark text-white border-0">
            <img src={errorImage} className="card-img" alt="BackGround"
              height='580px' />
            <div className="card-img-overlay d-flex flex-column
           justify-content-center">
              <div className="container">
              <button type="button" className="btn btn-warning py-3 " style={{marginTop:'8rem'}} onClick={()=>goToHome()}>Goto Homepage</button>
              </div>
            </div>
          </div>

        </div>
      </div>
  )
}

export default Error