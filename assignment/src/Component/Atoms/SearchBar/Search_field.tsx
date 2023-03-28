import React from 'react'
import "./Search.css"
interface data{
  value:React.Dispatch<React.SetStateAction<any>>
}
const Search_field:React.FC<data> = (props) => {



  return (
    // <input type="text" id="myInput"  placeholder="Search any candidate" title="Type in a name" onChange={(e)=>{setquery(e.target.value)}}/>
   
    <input type="text" id="myInput"  placeholder="Search any candidate" title="Type in a name" onChange={(e)=>{props.value(e.target.value)}}/>

    
  )

  }
export default Search_field