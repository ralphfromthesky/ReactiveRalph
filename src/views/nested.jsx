import React from "react";
import Main from "../components/main/main.jsx";
import { Box, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { changeTheme } from "../store/store.tsx";


const Nested = () => {
  const {dark} = changeTheme()
  return (
    <Main>
      <section style={{ marginTop: "20px" }}>
        <Box>thi is nested route</Box>
        <Box display={"flex"} justifyContent={"space-around"}>
          <Typography variant="h4"  sx={{color: dark ? 'black' : 'white' }}>
            <Link to="nestedA">Nested A</Link>
          </Typography>
          <Typography variant="h4"  sx={{color: dark ? 'black' : 'white' }}>
            <Link to="nestedB">Nested B</Link>
          </Typography>
        </Box>
        <Box display={"flex"} justifyContent={"center"}>
          <Outlet />
        </Box>
        <Box>
          <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Scenario: <br/> In a React application with multiple views or components,
            you might want to organize your routes in a hierarchical or nested
            structure to reflect the structure of your application. <br/><br/>Problem:<br/> How
            do you manage routing for different components or views that are
            logically grouped together? Solution: Nested routes allow you to
            define routes within routes, creating a hierarchy of views or
            components.
          </Typography><br/>
          <img src="image/routes.png"/>
        </Box>
      </section>
    </Main>
  );
};

export default Nested;
