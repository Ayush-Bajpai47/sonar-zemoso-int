import React from 'react'
import Stack from "@mui/material/Stack";
import Search_field from '../../Atoms/SearchBar/Search_field';
import "./Header.css"
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import filter from "../Images/filter.png"
import Button from "@material-ui/core/Button"
import FilterListIcon from '@mui/icons-material/FilterList';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface data{
  statechanger:React.Dispatch<React.SetStateAction<any>>
}
 const Header:React.FC<data> = (props) => {
  return (
   <>
    <Stack direction="row" mt={1}  justifyContent="space-between"
  alignItems="center" spacing={2}>
   
                <h1 className="heading">Candidate Information</h1>
                <Stack direction="row" spacing={2} justifyContent="space-between"  alignItems="center" >    
    <Search_field value={props.statechanger}/>
   <Button variant='outlined' className="btn"><FilterListIcon/><span className="txt">filter</span></Button>
  <Button variant='outlined' className="btn"><MoreVertIcon/></Button>
            </Stack>
            </Stack>
    
   </>
  )
}
export default Header;
