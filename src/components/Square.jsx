import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { SquareNum } from "./Numbers/SquareNum";
import { PowNum } from "./Numbers/PowNum";
import { CubeNum } from "./Numbers/CubeNum";

export const Square = () => {
  return (
    <Card sx={{ bgcolor: "crimson" }}>
      <CardContent>
        <Typography variant="h4">Square Number</Typography>
        <PowNum />
        <CubeNum />
        <SquareNum />
      </CardContent>
    </Card>
  );
};
