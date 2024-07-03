import React, { useEffect, useState, useCallback } from "react";
import Main from "../components/main/main.js";
import { Box, Button, Typography } from "@mui/material";
import UseCallbackChild from "./useCallbackChild.js";
import { changeTheme } from "../store/store.tsx";


function UseCallback() {
  const {dark} = changeTheme()
  const [data, setData] = useState("yo wazzup ma brodha");
  const [toggle, setToggel] = useState(false);
  const [number, setNumber] = useState(100)

  const showData = useCallback(
    (name) => {
      return data + name;
    },
    [data]
  );

  const showNumber = useCallback((a, b) => {
    return a + b
  },[])


  const showAlert = useCallback(() => {
    alert(`dataChange ${number}`)
  }, [number])
  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        <Box>{showData()}</Box>
        {/* <Box>{showAlert()}</Box> */}
        <Box>{showNumber(10, 40)}</Box>

        <Button
          variant="contained"
          color="success"
          onClick={() => setToggel(!toggle)}
        >
          toggle
        </Button>
        {toggle && <h1>toggle</h1>}
        <UseCallbackChild functionFromParen={showData}  newFunctionFromParent={showNumber} funcFromParent={showAlert}/>
        <br />
        <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
          "useCallback" <br /> <br />
          Scenario: <br />
          You have a React component, and sometimes you need to use functions
          (like click handlers or other callbacks) in that component. <br />{" "}
          <br />
          Problem: <br />
          When you pass functions around, React might recreate them every time
          your component renders. This can lead to unnecessary work and, in some
          cases, unnecessary re-renders of your component.
          <br /> <br />
          Solution: <br />
          Use the useCallback hook from React. It "memoizes" your functions. In
          simple terms, it makes sure that if your component renders, but the
          things your function depends on didn't change, then the function stays
          the same. This helps avoid unnecessary re-creation of functions.
        </Typography>
        <br />
        <Typography variant="h4" color="initial"  sx={{color: dark ? 'black' : 'white' }}>
          Parent component:
        </Typography>
        <img src="image/useCallback2.png" />
        <Box>
          <Typography variant="h4" color="initial"  sx={{color: dark ? 'black' : 'white' }}>
            Child component:
          </Typography>
          <img src="image/useCallback.png" />
        </Box>
      </Box>
    </Main>
  );
}

export default UseCallback;
