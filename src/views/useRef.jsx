import React, { useEffect, useRef, useState } from "react";
import Main from "../components/main/main.jsx";
import { Box, Button, Typography } from "@mui/material";
import { changeTheme } from "../store/store.tsx";

const UseRef = () => {
  const newName = useRef("tessa");
  const myInput = useRef(null);
  const { dark } = changeTheme();
  const [name, setName] = useState("ralph");
  const myName = useRef(name);



  const handleChange = (e) => {
    setName(e.target.value);
    myName.current = e.target.value;
    alert(`the value is ${myName.current} `);
  };
  const submitLog = () => {
    alert(`the value of useRef is ${name}`);
  };
  const changeName = () => {
    console.log(newName.current.value);
    alert("this is the initial" + newName);
    alert(newName.current.value);
    newName.current.value = "";
    newName.current.focus();
  };

  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        <Box>
          <input type="text" placeholder={name} ref={newName} />
          <Button variant="contained" color="primary" onClick={changeName}>
            change name
          </Button>
        </Box>
        <div className="border-2 border-[red]">
          <input ref={myName} onChange={handleChange} />
          <Button variant="outlined" color="secondary" onClick={submitLog}>
            change this
          </Button>
        </div>
      
        <Box>
          <Typography
            variant="h6"
            color="initial"
            component="p"
            sx={{ color: dark ? "black" : "white" }}
          >
            Scenario: <br />
            In a React application, you might encounter situations where you
            need to interact with or keep track of a specific element in the
            DOM, such as reading its value, focusing on it, or storing a
            reference to it.
            <br />
            <br /> Problem:
            <br /> How do you work with individual elements in the DOM and
            maintain a reference to them within your React components? <br />
            <br />
            Solution: <br />
            useRef is a React hook that provides a way to create mutable objects
            that persist across renders, allowing you to interact with and store
            references to DOM elements.
          </Typography>
        </Box>
        <br />
        <Box>
          <img src="image/useRef.png" />
        </Box>
        <br />
        <Box>
          <Typography
            variant="h6"
            color="initial"
            component="p"
            sx={{ color: dark ? "black" : "white" }}
          >
            Explanation: <br /> useRef is used to create a mutable object
            (inputRef in this example). The inputRef is then attached to a
            specific DOM element using the ref attribute. The current property
            of the ref (inputRef.current) provides direct access to the
            underlying DOM element. In this example, a function (focusInput) is
            defined to focus on the input element, and it's called both on
            component mount and when a button is clicked. <br /> <br />
            Key Points: <br />
            useRef is a React hook used for creating mutable objects that
            persist across renders. It is commonly used to interact with and
            store references to DOM elements. The current property of the ref
            provides access to the current value (DOM element) of the ref.
            useRef is often used in conjunction with useEffect for actions that
            need to occur after the initial render. <br /> <br />
            In simple terms, useRef in React helps you work with and store
            references to DOM elements, allowing you to perform actions or
            access their properties within your components.
          </Typography>
        </Box>
      </Box>
    </Main>
  );
};

export default UseRef;
