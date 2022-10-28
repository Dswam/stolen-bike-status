import React from 'react'
import { useGlobalContext } from './Context'
// manufacturer_name
const Search = () => {
  const {status,searchPost}=useGlobalContext()
  return (
  <>
  <h1></h1>
  <form onSubmit={(e)=>e.preventDefault()} >
    <div  class="form-group mx-auto" style={{width:"15rem" }} >
      <input type='text'  class="form-control" placeholder='search  by status'
      value={status} 
      onChange={(e)=>searchPost(e.target.value)}/>
    </div>
  </form>
  
  </>
  )
}

export default Search