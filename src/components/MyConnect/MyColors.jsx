import React,{useState} from "react";
import { Grid, Button } from "@mui/material";
import axios from "axios";

export const MyColors=()=>{
    const [data,setData]=useState([]);

    const handleGetColors=async()=>{
      const result= await axios.get("http://localhost:4040/colors");
      setData(result.data);
    }
    return(
        <React.Fragment>
            <h3>My Colors</h3>
            <Grid container spacing={3}>
            <Grid item xs={12}>
              <Button variant="contained" fullwidth onClick={handleGetColors}>Get Colors</Button>
            </Grid>
              {
                data.map(item=>
                <Grid item xs={3}>
                  <div className="clr" style={{backgroundColor:item}}></div>
                </Grid>
                )
              }
            </Grid>
        </React.Fragment>
    )
}