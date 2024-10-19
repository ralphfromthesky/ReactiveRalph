import { Box, Typography } from "@mui/material";
import React, { useState, createContext } from "react";
import Main from "../components/main/main.jsx";
import Login from "./login.jsx";
import User from "./user.jsx";
import { changeTheme } from "../store/store.tsx";

export const appContext = createContext();

function UseContext() {
  const {dark} = changeTheme()
  const [userName, setUserName] = useState("");
  return (
    <appContext.Provider value={{ userName, setUserName }}>
      <Main>
        <Box sx={{ padding: "20px" }}>
          {/* <Login fromParentComponent={setUserName} />
          <User fromParentComponent2={userName} /> */}
          <Login />
          <User />
          <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            this text comes from two child component
          </Typography>
          <br />
          <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            "useContext" is a hook in React that provides a way to access values
            from the React context without explicitly passing them through the
            component tree. It simplifies the process of sharing data between
            components that are deeply nested in the hierarchy.
          </Typography>
          <br />
          <Typography variant="h4" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Parent Componnent:
          </Typography>
          <img src="image/useContetext.png" />
          <br />
          <br />
          <Typography variant="h4" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Child Componnent Login:
          </Typography>
          <img src="image/useContetext2.png" />
          <br /> <br />
          <Typography variant="h4" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Child Componnent User:
          </Typography>
          <img src="image/useContetext3.png" />
        </Box>
      </Main>
    </appContext.Provider>
  );
}

export default UseContext;
