import React from "react";
import { Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

export const TopNav = () => {
  return (
    <React.Fragment>
      <Grid container spacing={1}>
        <Grid item xs={2} className="img">
          <img src="Images/PickupBizLogo.jpg" width={100} alt="PickupBiz" />
        </Grid>
        <Grid item xs={1}>
          <Link to="/number" className="tabnav">
            <Button variant="contained" color="success" fullWidth>
              Number
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/tables" className="tabnav">
            <Button variant="contained" color="success" fullWidth>
              Tables
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/square" className="tabnav">
            <Button variant="contained" color="success" fullWidth>
              Square
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/geo">
            <Button variant="contained" color="success" fullWidth>
              Geometry
            </Button>
          </Link>
        </Grid>
        <Grid item xs={1}>
          <Link to="/myconnect">
            <Button variant="contained" color="success" fullWidth>
           myconnect
            </Button>
          </Link>
        </Grid>
       
      </Grid>
    </React.Fragment>
  );
};
