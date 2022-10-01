import React from "react";
import { Grid, Card, CardContent } from "@mui/material";
import { RectFence } from "./Geo/RectFence";
import { Students } from "./Geo/Students";
export const Geo = () => {
  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <h2>Geometry</h2>
          <Students />
          <RectFence />
        </CardContent>
      </Card>
    </React.Fragment>
  );
};
