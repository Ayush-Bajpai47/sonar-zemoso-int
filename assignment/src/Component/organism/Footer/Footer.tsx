import { Stack } from '@mui/material'
import React  from 'react'
import Page from '../../Molecules/Pagination/Pagination'
import "./footer.css"
import Dropdown from 'react-bootstrap/Dropdown';

const Footer = () => {
    const dropstyle={
        background:"#FFFFFF",color: "#2C2C2E",border:"0.8px solid #E5E7ED",marginLeft:"5px",marginTop:"-4px",
        fontFamily:"Inter"
    }
   
  return (
    <>
    <Stack
  direction="row"
  justifyContent="space-between"
  alignItems="center"
  mt={4} spacing={2}>
    <Stack
  direction="row"
  justifyContent="space-around"
  alignItems="center"
   spacing={3}>
<h2 className='footertext'>10 out of 84 results</h2>

<Dropdown>
      <Dropdown.Toggle style={dropstyle} >
       10 per page
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item eventKey="10">10</Dropdown.Item>
        <Dropdown.Item eventKey="20">20</Dropdown.Item>
        <Dropdown.Item eventKey="30">30</Dropdown.Item>
      </Dropdown.Menu>
   
    </Dropdown>
    </Stack>
    <Page/>

    </Stack>
    </>
  )
}

export default Footer