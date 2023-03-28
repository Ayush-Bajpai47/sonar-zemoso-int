import React, { useState } from 'react'
import {  Grid, Paper } from "@material-ui/core";
import Header from '../../organism/Header/Header';
import Maintable from '../../organism/Table/Maintable';
import Footer from '../../organism/Footer/Footer';
const Index = () => {
  const[query,setquery]=useState("")
    const Paperstyle = {
        padding: "5px 5px",margin: "50px auto",
        borderRadius:'6px'
      };
  return (

    <Grid style={{marginLeft:"10px",marginRight:"10px"}}>
    <Paper elevation={20} style={Paperstyle}>
   <Header statechanger={setquery}/>
<Maintable query={query} />
<Footer/>
    </Paper>
        </Grid>
       
      )
  
}

export default Index