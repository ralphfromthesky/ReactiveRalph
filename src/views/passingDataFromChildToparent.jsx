import React, { useEffect, useState } from "react";
import Main from "../components/main/main.jsx";
import { Box, Typography } from "@mui/material";
import PassingDataFromChildToparentChild from "./passingDataFromChildToparentChild.jsx";
import { changeTheme } from "../store/store.tsx";


const PassingDataFromChildToparent = () => {
  const [state, setState] = useState("data from child");
  const [setdata, dataFromChildish] = useState([]);
  const {dark} = changeTheme()
  const [aquireDataFromChild, setData] = useState()
  const [sampleBool, setSampleBool] = useState()

  const dataFromChild = (data) => {
    setState(data);
  };

  const dataFromkids = (data) => {
    // alert(`this is from child ${data}`);
    dataFromChildish(data);
    console.log(data);
  };

  const newData =(data) => {
    setData(data)
  }
  const setNow = (data) => {
    setSampleBool(data)
  }

  useEffect(() => {
    dataFromkids()
  }, [])

  return (
    <Main>
      <Box sx={{padding: '20px'}}>
        <Box>passingDataFromChildToparent</Box>
        {aquireDataFromChild && (<div>this show from parent</div>)}
        <Typography variant="h2" color="initial">
          {state}
        </Typography>
        {sampleBool ? 'this show boolean value' : 'this hides booleanbvalue'}
        <PassingDataFromChildToparentChild
          dataFromChildren={dataFromChild}
          dataFromChild={dataFromkids}
          newestDataFromChild={newData}
          setThis={setNow}
        />

        <br/>
        {/* {setdata?.map((child, index) => (
          <Typography variant="h3" color="initial" key={index}>
            {child.car} -{child.plane} -{child.motorcycle}
          </Typography>
        ))} */}
        <Box>
          <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Scenario: <br />
            Imagine a situation where an event or action occurs in a child
            component, and you want to notify the parent component or pass some
            information back to it. <br />
            <br />
            Problem: <br />
            How do you communicate from a child component to its parent in
            React? Solution: Pass a function (callback) as a prop from the
            parent to the child. The child can then call this function to send
            data or notify the parent about an event.
          </Typography>
        </Box>
        <br />
        <Box>
          <Typography variant="h5" color="initial">
            Parent component:
          </Typography>
          <img src="image/child.png" />
          <br /> <br />
          <Typography variant="h5" color="initial">
            Child component:
          </Typography>
          <img src="image/child2.png" />
        </Box>
        <Box>
          <Typography variant="h6" color="initial" component="p"  sx={{color: dark ? 'black' : 'white' }}>
            Explanation: <br />
            The ParentComponent defines a state variable (dataFromChild) and a
            callback function (handleDataFromChild) to receive data from the
            child. The ChildComponent receives the callback function as a prop
            (sendDataToParent) from the parent. When an event occurs in the
            child (e.g., a button click), it calls the callback function with
            the data to be sent to the parent.
            <br />
            <br /> Key Points: Communication from child to parent is achieved by
            passing a callback function from the parent to the child as a prop.
            The child calls this callback function to send data or notify the
            parent about an event. This pattern enables a unidirectional flow of
            data in React, with data flowing from parent to child through props
            and from child to parent through callbacks. <br />
            <br />
            In simple terms, child-to-parent communication in React involves
            passing a callback function from the parent to the child as a prop.
            The child then uses this callback to send data or trigger actions in
            the parent component.
          </Typography>
        </Box>
      </Box>
    </Main>
  );
};

export default PassingDataFromChildToparent;
