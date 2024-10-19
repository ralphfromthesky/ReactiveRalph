import React, { useEffect, useState } from "react";
import Main from "../components/main/main.jsx";
import { Box } from "@mui/system";
import UseEffectChild from "../components/useEffectChild.jsx";
import Typography from "@mui/material/Typography";
import GlobalModal from "../components/material/globalModal.jsx";
import { changeTheme } from "../store/store.tsx";

const UseEffect = () => {
  const [click, receivedClick] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const messageFromParentUseState = "this modal run when components loads";
  const { dark } = changeTheme();
  const [name, changeName] = useState("ralph");

  const receivedClickFromChild = (data) => {
    receivedClick(data);
    console.log(click);
  };

  const closethisMOdal = () => {
    setOpenModal(false);
  };
  useEffect(() => {
    setOpenModal(true);
    setTimeout(() => {
      alert("ano na?");
    }, 1000);
  }, [name]);
  return (
    <Main>
      <Box sx={{ padding: "20px" }}>
        <Typography
          variant="h3"
          color="initial"
          sx={{ color: dark ? "black" : "white" }}
        >
          -=[this is the useEffect]=-
          <br />
          this click from {click} times comes from child using useEffects
        </Typography>
        <UseEffectChild clickFromChild={receivedClickFromChild} />
        <div onClick={() => changeName('santolorin')}>

          click this to rerender = {name}
        
        </div>
        <Box>
          <Typography
            variant="h6"
            color="initial"
            component="p"
            sx={{ color: dark ? "black" : "white" }}
          >
            Scenario: <br />
            In a React component, you might need to perform certain actions or
            side effects in response to changes in the component, such as
            fetching data, subscribing to external events, or updating the DOM.{" "}
            <br /> <br />
            Problem: <br /> How do you manage these side effects in a functional
            component? <br /> <br />
            Solution: <br /> useEffect is a React hook that allows you to
            perform side effects in functional components.
          </Typography>
          <br />
          <img src="image/useEffect.png" />
          <img src="image/useEffect2.png" />
          <Box>
            <Typography
              variant="h6"
              color="initial"
              component="p"
              sx={{ color: dark ? "black" : "white" }}
            >
              Explanation: <br /> useEffect takes two arguments: a function to
              execute (the effect) and an optional dependency array. The effect
              function is executed after each render. The optional dependency
              array controls when the effect runs. If the array is empty ([]),
              the effect runs once after the initial render. If there are
              dependencies listed, the effect will run whenever any of those
              dependencies change. <br /> <br /> Key Points: <br /> useEffect is
              used for side effects in functional components. It's called after
              the component renders, and you can perform actions like data
              fetching, subscriptions, or manual DOM manipulations. The optional
              cleanup function in useEffect helps you handle tasks like
              canceling network requests or cleaning up resources. The
              dependency array controls when the effect runs and helps avoid
              unnecessary re-execution of the effect. <br /> <br /> In simple
              terms, useEffect allows you to manage side effects in your React
              functional components, making it easy to handle various tasks
              related to component lifecycle and data flow.
            </Typography>
          </Box>
        </Box>
      </Box>

      <GlobalModal
        bukasOpen={openModal}
        saradoClose={closethisMOdal}
        messageFromParent={messageFromParentUseState}
      />
    </Main>
  );
};

export default UseEffect;
