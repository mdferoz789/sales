import React from "react";
import { Grid, Card, CardContent } from "@mui/material";

export const UserItem = ({ item }) => {
  return (
    <Grid item xs={3}>
      <Card sx={{ bgcolor: "lightblue" }}>
        <CardContent sx={{color:"green"}}>
          <h3>Name:-{item.name}</h3>
          <h4>Company:-{item.company.name}</h4>
          <b>cell No:-{item.phone}</b>
          <h5>City:-{item.address.city}</h5>
          <h4>website:-{item.website}</h4>
          <h4>Email:-{item.email}</h4>
        </CardContent>
      </Card>
    </Grid>
  );
};
