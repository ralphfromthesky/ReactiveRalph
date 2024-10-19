
import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const UseEffectChild = (props) => {
  const [click, setClick] = useState(0);

  const clickFromChild = () => {
    setClick(click + 1)
     props.clickFromChild(click)
  }

  useEffect(() => {
    document.title = `you clicked ${click} times`;
  });
  return (
    <Box>
      <Button variant='contained' color="secondary" onClick={clickFromChild}>click</Button>
    </Box>
  );
};

export default UseEffectChild;

