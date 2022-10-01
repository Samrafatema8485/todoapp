import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

export const CubeNum = () => {
  const [num, setNum] = useState(0);
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <TextField
            label="Enter Number"
            variant="outlined"
            onChange={(e) => setNum(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <h1>Cube : {num ** 3}</h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
