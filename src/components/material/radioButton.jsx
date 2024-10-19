import {
  Box,
  Radio,
  FormControl,
  FormLabel,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";
import React, { useState } from "react";

const RadioButton = () => {
  const [radioValue, setRadioValue] = useState("work");

  
  return (
    <Box>
      <RadioGroup
        value={radioValue}
        onChange={(e) => setRadioValue(e.target.value)}
      >
        <FormControlLabel value="money" control={<Radio />} label="money" />
        <FormControlLabel value="todos" control={<Radio />} label="todos" />
        <FormControlLabel
          value="reminders"
          control={<Radio />}
          label="reminders"
        />
        <FormControlLabel value="work" control={<Radio />} label="work" />
      </RadioGroup>
    </Box>
  );
};

export default RadioButton;
