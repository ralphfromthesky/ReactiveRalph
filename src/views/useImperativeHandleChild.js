import React, { useState, forwardRef, useImperativeHandle } from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const UseImperativeHandleChild = forwardRef((props, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    clickToggle() {
      setToggle(!toggle)
    }
    

  }))
  return (
    <>
      <Box>
        <Button
          variant="contained"
          color="success"
     
        >
          Button from child
        </Button>
        {toggle && <h1> this is toggle</h1>}
      </Box>
    </>
  );
});

export default UseImperativeHandleChild;


