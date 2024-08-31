import { Box, Button, Typography } from "@mui/material";
import Reac, { useRef } from "react";
import Main from "../components/main/main";
import UseImperativeHandleChild from "./useImperativeHandleChild";

function UseImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        <Button variant="contained" color="info">
          Botton from parent but function comes from child
        </Button>
        <div onClick={() => buttonRef.current.clickToggle()}>toggle</div>
        <br />
        <br />
        <UseImperativeHandleChild ref={buttonRef} />
        <br />
        <br />
        <Box>
          <Typography variant="h6" component="p">
            Scenario: <br />
            In React, the forwardRef function allows a parent component to
            receive a ref from a child component. This is useful when you need
            to interact with the child component's DOM node or instance. <br />
            <br />
            Problem: <br />
            How can you customize the properties of the ref that the parent
            receives from the child? <br />
            <br />
            Solution: <br />
            useImperativeHandle allows you to selectively expose properties or
            methods of the child component's instance to the parent component's
            ref. Basic Usage:
          </Typography>
        </Box>
        <br />
        <br />

        <Box>
          <Typography variant="h4" color="initial" component="p">
            Parent Component:
          </Typography>
          <img src="image/useImpertativeHandle.png" />
          <br />
          <br />
          <Typography variant="h4" color="initial" component="p">
            Child Component:
          </Typography>
          <img src="image/useImpertativeHandle2.png" />
        </Box>
        <br />
        <br />
        <Box>
          <Typography variant="h6" component="p">
            Explanation: <br /> The useImperativeHandle hook is used within the
            child component to customize the properties/methods exposed to the
            parent ref. <br />
            In this example, the child exposes a getInternalState method and a
            customMethod to the parent ref. <br />
            The parent component uses the child component and its ref to access
            these exposed properties and methods. <br /> <br /> Key Points:{" "}
            <br />
            useImperativeHandle is used with forwardRef to customize the
            properties/methods exposed to the parent when using a child
            component. <br /> <br /> It's not about passing data from child to
            parent in a general sense but about exposing specific
            functionalities of the child to the parent. <br /> <br />
            The hook takes two arguments: the ref and a callback function that
            returns an object representing the properties/methods to expose.{" "}
            <br />
            It's useful when you want to control what parts of the child
            component are accessible to the parent through the ref. <br />{" "}
            <br />
            In simple terms, useImperativeHandle is a way to fine-tune the
            information that a parent component can access from its child
            component using a ref.
          </Typography>
        </Box>
      </Box>
    </Main>
  );
}

export default UseImperativeHandle;
