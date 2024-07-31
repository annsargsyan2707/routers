import { Box } from "@mui/material";
import React from "react";

const Home = () => {
  return (
    <Box
      component="img"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRwm7lV1Uvi_snPy1NuqAtHEXrxlB8V8w4DQ&s"
      alt="Pet Rescue"
      sx={{ width: 400, height: 450, objectFit: "cover" }}
    />
  );
};

export default Home;
