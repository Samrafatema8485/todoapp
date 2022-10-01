import React, { useState } from "react";
import { Grid, TextField, Card, CardContent, Typography } from "@mui/material";
import { Previous } from "./Previous";

export const NextNum = () => {
  const [num, setNum] = useState(0);
  console.log("num", num);

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              Number
            </Grid>
            <Grid item xs={6}>
              Next Number
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Enter Number"
                variant="outlined"
                onChange={(e) => setNum(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h2">{Number(num) + 1}</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
