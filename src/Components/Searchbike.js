import React from 'react'
import { useGlobalContext } from './Context'
import Search from './Search';
import Pagination from './Pagination';

const Searchbike = () => {

  const { bikes, stolenness, isLoading, removePost } = useGlobalContext();

  if (isLoading) {

    return (
      <>
        <h1>Loading.....</h1>
      </>
    );
  }

  return (
    <>
    <Search/>
    <Pagination/>

      {bikes.map((currPost) => {

       const{id,thumb,frame_model,stolen_location,status,title,manufacturer_name}=currPost;
        return (


          <div className="card mb-3 mt-2 mx-auto" style={{ maxWidth: "540px" }} key={id}>
            <div className="row g-0">
              <div className="col-md-4">
                <img src={thumb} className="img-fluid rounded-start pt-4 px-2" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{frame_model}</h5>
                  <p className="card-text">{title}</p>
                  {/* <p className="card-text"><small className="text-muted">Date of stolen:{frame_model}</small></p> */}
                  <p className="card-text"><small className="text-muted">Location of stolen:{stolen_location}</small></p>
                  <p className="card-text"><small className="text-muted">status of bike:{status}</small></p>
                  <p className="card-text"><small className="text-muted">Manufacturer of bike:{manufacturer_name}</small></p>
                  <a href='#' onClick={() => removePost(id)}  className='ms-auto' style={{textDecoration:'none' ,color:'red', paddingLeft:'15rem'}}>Remove</a>
                </div>
              </div>
            </div>
          </div>



        )

      })}



    </>
  )

}

export default Searchbike