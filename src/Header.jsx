import React from "react";
import { Link as RouterLink, Outlet } from "react-router-dom";
import { BREED_LIST_ROUTE, RANDOM_IMG } from "./constants/routes";
import { Box, Typography } from "@mui/material";
import { Link as MuiLink } from "@mui/material";

const Header = () => {
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: "#94C92C",
          fontWeight: "bold",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Let's get to know and love our best friends
      </Typography>
      <Box
        justifyContent="center"
        sx={{
          color: "#00ADF1",
          display: "#FFFFFF",
          fontWeight: "bold",
          m: 5,
          fontSize: 20,
          display: "flex",
          gap: 2,
        }}
      >
        <MuiLink
          component={RouterLink}
          to="/"
          underline="hover"
          sx={{ color: "#00ADF1" }}
        >
          Home
        </MuiLink>
        <MuiLink
          component={RouterLink}
          to={BREED_LIST_ROUTE}
          underline="hover"
          sx={{ color: "#00ADF1" }}
        >
          Breed list
        </MuiLink>
        <MuiLink
          component={RouterLink}
          to={RANDOM_IMG}
          underline="hover"
          sx={{ color: "#00ADF1" }}
        >
          Random image
        </MuiLink>
      </Box>
      <Outlet />
    </>
  );
};

export default Header;
