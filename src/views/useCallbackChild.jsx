import { Box, Button } from "@mui/material";
import React, { useEffect } from "react";

function UseCallbackChild({ functionFromParen, newFunctionFromParent, funcFromParent }) {
  const handleClick = () => {
    const result = newFunctionFromParent(100, 1000);
    console.log(result);
  };
  useEffect(() => {
    console.log("recive function from parent");
  }, [functionFromParen]);
  return (
    <Box>
      <Box>{functionFromParen(" " + "ralph")} </Box>
      <Box>{funcFromParent()}</Box>
      <Box>
        {" "}
        <Button variant="contained" color="primary" onClick={handleClick}>
          function from parent
        </Button>
      </Box>
    </Box>
  );
}

export default UseCallbackChild;
