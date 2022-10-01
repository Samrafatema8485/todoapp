import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { Home } from "./components/Home";
import "./components/common.css";

function App() {
  return (
    <Card>
      <CardContent>
        <Home />
      </CardContent>
    </Card>
  );
}

export default App;
