import React, { useState } from "react";
import { Grid, TextField } from "@mui/material";

export const PowNum = () => {
  const [num, setNum] = useState(0);
  const [pow, setPow] = useState(0);
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField
            label="Enter Number"
            onChange={(e) => setNum(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Enter Power"
            onChange={(e) => setPow(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <h1>
            {num} to the power {pow} is {num ** pow}
          </h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
