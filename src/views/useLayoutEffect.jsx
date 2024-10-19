import React, { useEffect, useLayoutEffect, useRef } from "react";
import Main from "../components/main/main.jsx";
import { Box, Typography } from "@mui/material";
import { changeTheme } from "../store/store.tsx";


const UseLayoutEffect = () => {
  const {dark} = changeTheme()
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = "GHELLOH!";
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        <Box>
          <input
            ref={inputRef}
            value="ralph"
            style={{ width: "20vw", height: "15vh" }}
          />
        </Box>
        <Box>
          <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Scenario: <br />
            In a React application, there are cases where you want to perform
            some actions after the browser has painted the UI to the screen.
            This is important when you need to measure or manipulate the DOM
            elements and ensure that these actions occur before the next paint.{" "}
            <br />
            <br />
            Problem:
            <br /> How do you execute code after the DOM has been painted to the
            screen, ensuring that the user sees the initial render? <br />
            <br />
            Solution:
            <br /> useLayoutEffect is a React hook that performs an effect
            synchronously after all DOM mutations. It's similar to useEffect,
            but it runs synchronously after all DOM mutations. This makes it
            suitable for tasks that require accurate measurements or immediate
            visual updates.
          </Typography>
        </Box>
        <br />
        <br />
        <Box>
          <img src="image/useLayoutEffect.png" />
          <img src="image/useLayoutEffect2.png" />
          <br /> <br />
          <Typography variant="h6" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            --- it first console the value of the inputRef as 'ralph' then
            consoles 'GHELLOH!'
          </Typography>
          <br />
          <br />
        </Box>
        <Box>
          <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Explanation: <br />
            useLayoutEffect is used to perform an effect after the DOM has been
            painted. In this example, we use it to measure the width of a
            paragraph element (myElementRef.current.clientWidth) and update the
            state accordingly. The effect runs only once after the initial
            render, thanks to the empty dependency array ([]). <br />
            <br />
            Key Points: useLayoutEffect is a React hook used to perform an
            effect synchronously after all DOM mutations.
            <br />
            <br /> It's similar to useEffect but runs before the browser paints
            to the screen. Useful for tasks like measuring or manipulating the
            DOM that require accurate values immediately after the initial
            render. It's recommended to use useEffect by default, and only use
            useLayoutEffect when a synchronous effect is crucial. <br />
            <br />
            In simple terms, useLayoutEffect in React is a hook that allows you
            to perform tasks immediately after the DOM has been painted, making
            it suitable for scenarios where accurate measurements or immediate
            visual updates are required.
          </Typography>
        </Box>
      </Box>
    </Main>
  );
};

export default UseLayoutEffect;
