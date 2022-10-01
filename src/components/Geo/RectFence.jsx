import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

export const RectFence = () => {
  const [len, setLen] = useState(0);
  const [b, setB] = useState(0);
  const [layer, setLayer] = useState(1);
  const [pfc, setPfc] = useState(1);
  const [cal, setCal] = useState(0);
  const handleClear = () => {
    setLen(0);
    setB(0);
    setLayer(1);
    setPfc(1);
    setCal(0);
  };
  const handleCalculate = () => {
    const par = Number(len) + Number(b) + Number(len) + Number(b);
    const totalWire = par * layer;
    const totalCost = totalWire * pfc;
    setCal(totalCost);
  };
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <h1>L</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>B</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Layers</h1>
        </Grid>
        <Grid item xs={3}>
          <h1>Per Foot Cost</h1>
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={len}
            onFocus={() => setLen("")}
            onChange={(e) => setLen(e.target.value)}
            label="Enter Length"
            variant="outlined"
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={b}
            type="number"
            onFocus={() => setB("")}
            onChange={(e) => setB(e.target.value)}
            label="Enter Width"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Number of Layers"
            value={layer}
            type="number"
            onFocus={() => setLayer("")}
            onChange={(e) => setLayer(e.target.value)}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            value={pfc}
            type="number"
            onFocus={() => setPfc("")}
            onChange={(e) => setPfc(e.target.value)}
            label="Per Foot Cost"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Button
            disabled={len < 5 || b < 5 || layer < 1 || layer > 12 || pfc < 1}
            variant="contained"
            onClick={handleCalculate}
          >
            Calculate
          </Button>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" onClick={handleClear}>
            Clear
          </Button>
        </Grid>
        <Grid item xs={6}>
          <h1>Rs. {cal}/-</h1>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
