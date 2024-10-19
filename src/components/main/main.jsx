import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../navbar.jsx";
import Sidebar from "../sidebar.jsx";
import Rightbar from "../rightbar.jsx";
import Add from "../add.jsx";
import { changeTheme } from "../../store/store.tsx";

const Main = (props) => {
  const { dark } = changeTheme();
  const [mode, setMode] = useState("light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <Box>
      <ThemeProvider theme={darkTheme}>
        <Box
          sx={{
            backgroundColor: dark ? "" : "#1c1e23",
            color: dark ? "" : "white",
          }}
        >
          <Navbar />
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
          >
            <Sidebar setMode={setMode} mode={mode} name="ralph" />
            <Box
              sx={{
                width: { xs: "100%", sm: "50vw" },
                padding: {xs: '10px'},
                backgroundColor: dark ? "white" : "#1c1e23",
                color: dark ? "" : "white",
                zIndex: '10'
              }}
            >
              {props.children}
            </Box>
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </Box>
  );
};

export default Main;
