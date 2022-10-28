import React from 'react'
import { useGlobalContext } from './Context'

const Pagination = () => {
    

    const {page,getPrev,getNext,bikes}=useGlobalContext();
  return (
<div className=" d-flex mx-auto mt-2" style={{justifyContent:'center' }} >
    <div className=" ">
        <button className="btn btn-secondary" onClick={()=>getPrev()}>prev</button>
    </div>
    <div className="mx-5 mt-2" style={{fontWeight:'bold' }}>
        {page+1}of{bikes.length}
    </div >
    <div className="">
    <button  className="btn btn-secondary" onClick={()=>getNext()}>Next</button>
    </div>
</div>
  )
}

export default Pagination