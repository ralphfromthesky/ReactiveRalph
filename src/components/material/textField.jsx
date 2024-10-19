import React, { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  makeStyles,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@mui/material";
import RadioButton from "./radioButton";

export default function TextFiedlGlobal() {
  const newName = useRef(null);
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [pw, setpw] = useState("");

  const [nameError, setNameError] = useState(false);
  const [lastNameError, setErrolastName] = useState(false);
  const [pwError, setErrorpw] = useState(false);
  const [radioValue, setRadioValue] = useState("work");

  const submitForm = (e) => {
    e.preventDefault();
    console.log(radioValue);
    console.log(newName.current.value);
    if (name === "") {
      setNameError(true);
    }
    if (lastName === "") {
      setErrolastName(true);
    }
    if (pw === "") {
      setErrorpw(true);
    }
    if (name && lastName && pw) {
      console.log(name, lastName, pw);
      setNameError(false);
      setErrolastName(false);
      setErrorpw(false);
    } else if (!name && !lastName && !pw) {
      console.log("nun");
    }
  };

  return (
    <Box>
      <div style={{ padding: "15px" }}>
        <form
          style={{
            borderRadius: "5px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <TextField
            required
            id="outlined-required"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            //   inputRef={name}
            error={nameError}
            color="primary"
            fullWidth
          />
          {nameError ? "error" : ""}
          <TextField
            required
            id="outlined-requireds"
            label="last name"
            onChange={(e) => setlastName(e.target.value)}
            //   inputRef={name}
            error={lastNameError}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setpw(e.target.value)}
            error={pwError}
          />
          <TextField
            required
            id="outlined-requireder"
            label="inputRef"
            inputRef={newName}
          />
          <FormControl>
            <FormLabel>Note Category</FormLabel>

            <RadioGroup
              value={radioValue}
              onChange={(e) => setRadioValue(e.target.value)}
            >
              <FormControlLabel
                value="money"
                control={<Radio />}
                label="money"
              />
              <FormControlLabel
                value="todos"
                control={<Radio />}
                label="todos"
              />
              <FormControlLabel
                value="reminders"
                control={<Radio />}
                label="reminders"
              />
              <FormControlLabel value="work" control={<Radio />} label="work" />
            </RadioGroup>
          </FormControl>

          <Button variant="contained" color="primary" onClick={submitForm}>
            senders
          </Button>
        </form>
      </div>
    </Box>
  );
}
