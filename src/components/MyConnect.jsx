import React,{useState} from 'react';
import { Button, Grid } from '@mui/material';
import axios from "axios";
import { MyColors } from './MyConnect/MyColors';


export const MyConnect = () => {
    const [data,setData]= useState(["red", "blue", "yellow", "pink"])

    const handleGetEmp = async()=>{
   const result = await axios.get("http://localhost:4040/emp")
   console.log(result.data);
   setData(result.data)
    }
    return (
        <React.Fragment>
        <MyColors/>
    
            <h3>My API Connected</h3>
              <Button variant="contained" onClick={handleGetEmp}>Get Employees</Button>
              <Grid container spacing={2}>
                
                {data.map((item,index)=>(
                    <Grid item xs={12} key={index}>
                     {item.fname} {item.lname}
                    </Grid>  
                        

                    
                    ))
                }
              </Grid>
        </React.Fragment>
            
        
    );
};

