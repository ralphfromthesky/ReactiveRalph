import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const PassingDataFromChildToparentChild = (props) => {
  const [bool, isBool] = useState("this message is from child");
  const [data, passData] = useState("");
  const [newData, setNewData] = useState(false);
  const [bools, setBools] = useState(false);

  const dataFromChildren = () => {
    isBool(bool);
    props.dataFromChildren(bool);
  };
  const newestDataFromChild = () => {
    setNewData(!newData);
    props.newestDataFromChild(newData);
  };

  const setThis = () => {
    setBools(!bools);
    props.setThis(bools);
  };

  const dataFromParent = [
    {
      car: "honda",
      motorcycle: "kawazaki",
      plane: "airPlane",
    },
  ];

  const dataFromChild = () => {
    passData(dataFromParent);
    props.dataFromChild(data);
    console.log(dataFromParent);
  };



  return (
    <div>
      <Button variant="contained" color="success" onClick={dataFromChildren}>
        click me data from child
      </Button>
      <Button variant="contained" color="error" onClick={dataFromChild}>
        another data from child
      </Button>

      <Box>
        <Button variant="contained" onClick={newestDataFromChild}>
          NEW DATA
        </Button>
      <Button onClick={setThis} variant="contained">
        setBool
      </Button>
      </Box>
    </div>
  );
};

export default PassingDataFromChildToparentChild;
