import React, { useReducer } from "react";
import Main from "../components/main/main.jsx";
import { Box, Typography, Button } from "@mui/material";
import { changeTheme } from "../store/store.tsx";


const funcReduce = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count + 100, showText: !state.showText };
    default:
      return state;
  }
};

const UserReducer = () => {
  const {dark} = changeTheme()


  const [state, dispatch] = useReducer(funcReduce, {
    count: 0,
    showText: true,
  });

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
    dispatch({ type: "toggleShowText" });
  };

  return (
    <Main>
      <Box>
        <Typography variant="h3" color="initial">
          {state.count}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleIncrement}>
          INCREMENT
        </Button>
        {state.showText && <h3>this text is shown by useReducer</h3>}
      </Box>
      <br />
      <Box>
        <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
          'useReducer' is a hook in React that helps manage more complex state
          logic in your components. It's an alternative to using useState,
          especially when your state logic involves multiple transitions or
          depends on the previous state. Here's a simple explanation: State
          Management: With useState, you typically have one piece of state, and
          you update it by replacing the entire state with a new value. With
          useReducer, you have a more structured way of managing state. It
          allows you to have more control over how your state changes based on
          certain actions. Structure: useReducer takes in a reducer function and
          an initial state as arguments. The reducer function takes the current
          state and an action, then returns the new state based on that action.
          Actions are objects that describe what kind of state change you want
          to make. Dispatching Actions: To update the state with useReducer, you
          use a dispatch function. The dispatch function takes an action as an
          argument and triggers the reducer function to calculate the new state.
        </Typography>
        <img src="image/useReducer.png" />
        <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
          Dispatching Actions in Components:
        </Typography>
        <br/>
        <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
          Benefits: Helps manage complex state logic more effectively. Useful
          when the next state depends on the previous state. Reduces the chance
          of bugs related to state updates. In summary, useReducer is a tool to
          manage state in a more organized way when your state logic becomes
          more intricate, and you want to keep your code clean and maintainable.
          It's particularly useful for managing complex state transitions and
          avoiding common pitfalls associated with state updates.{" "}
        </Typography>
      </Box>
    </Main>
  );
};

export default UserReducer;
