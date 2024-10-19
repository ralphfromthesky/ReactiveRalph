import React, { useEffect, useState, useMemo, useRef } from "react";
import Main from "../components/main/main";
import { Box, Typography, Button, TextField } from "@mui/material";
import axios from "axios";

const UseMemo = () => {
  const [data, setData] = useState([]);
  const numberRef = 10;
  const [number, setNumber] = useState(null);
  const fetchData = async () => {
    const url = "https://jsonplaceholder.typicode.com/comments";
    try {
      const response = await axios.get(url);
      setData(response.data);
    } catch (error) {
      console.log(`error: ${error}`);
    }
  };

  const findlongestName = (comments) => {
    if (!comments) return null;
    let longestname = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestname.length) {
        longestname = currentName;
      }
    }
    console.log("this is computed");
    return longestname;
  };

  const dataChanges = () => {
    return 100 * numberRef;
  };

  const multiply = useMemo(() => {
    return dataChanges();
  }, [numberRef]);

  const longeNameMemo = useMemo(() => findlongestName(data), [data]);

  const imUsingUseMemo = useMemo(() => {
    if(number == 10) {
      alert('this is 10')
    }
    return number * 2;
  }, [number]);

  const show = useMemo((a, b) => {
    return 10 + 10
  })

  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        <h5>this will show number * 2</h5>
        <TextField
          id="outlined-basic"
          label="number"
          variant="outlined"
          onChange={(e) => setNumber(e.target.value)}
          type="number"
        />
        {imUsingUseMemo}
        <br />
        {show}
        <br />

        <Button variant="contained" color="success" onClick={fetchData}>
          FETCH
        </Button>
        <Typography variant="h6" component="p">
          Longest Name: <span style={{ color: "red" }}> {longeNameMemo} </span>
        </Typography>
        <br />
        <Typography variant="h2" component="p">
          number - {multiply}
        </Typography>
        <br />
        <Typography variant="h6" color="dark" component="p">
          "useMemo" is a hook that helps optimize the performance of your
          components by memoizing the result of expensive computations. It's
          particularly useful when you have a function that calculates a value
          based on some inputs, and you want to avoid recalculating that value
          on every render if the inputs haven't changed.
        </Typography>
        <br />
        <img src="image/useMemo.png" />
        <br />
        <br />
        <Typography variant="h6" color="dark" component="p">
          When to Use useMemo: <br />
          Use useMemo when you have a function that depends on certain inputs,
          and you want to avoid recalculating the result when those inputs
          haven't changed.
          <br /> This is particularly relevant for scenarios where the
          computation is resource-intensive or time-consuming. <br />
          Remember that while useMemo can be beneficial for optimizing
          performance in specific scenarios, it's important to use it
          judiciously. Not every function needs to be memoized, and overusing it
          can lead to unnecessary complexity in your code.
        </Typography>
      </Box>
    </Main>
  );
};

export default UseMemo;
