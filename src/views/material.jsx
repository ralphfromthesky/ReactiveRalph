import React, { useEffect, useState } from "react";
import Main from "../components/main/main.jsx";
import { Box, Button, Typography } from "@mui/material";
import GlobalModal from "../components/material/globalModal.jsx";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import TextFiedlGlobal from "../components/material/textField.jsx";
import RadioButton from "../components/material/radioButton.jsx";
import { changeTheme } from "../store/store.tsx";
import BasicSelect from "../components/material/select.tsx";
import CustomTabPanel from "../components/material/tabs.tsx";

const Material = () => {
  const { dark } = changeTheme();
  const [open, setOpen] = useState();
  const headerFromParent = "this header from parent";
  const messageFromParent = "this message comes from parent";
  const sampledatafromparent = "what the?!";
  const valueFromParent = [
    { id: 1, name: "ralph", value: 10 },
    { id: 2, name: "shenron", value: 100 },
    { id: 3, name: "gadwin", value: 2000 },
    { id: 4, name: "garland", value: 10000 },
  ];
  const bukasOpen = () => {
    setOpen(true);
  };
  const saradoClose = () => {
    setOpen(false);
  };

  return (
    <Main>
      <Box sx={{ p: 2 }}>
        <Button variant="contained" color="primary" onClick={bukasOpen}>
          open Global modal
        </Button>
        <TextFiedlGlobal />
        
        
        <GlobalModal
          bukasOpen={open}
          saradoClose={saradoClose}
          headerFromParent={headerFromParent}
          messageFromParent={messageFromParent}
          sampledatafromparent={sampledatafromparent}
        />
        <BasicSelect newValue={valueFromParent} />
        <Box>
          <CustomTabPanel/>
        </Box>
        <Box>
          <Typography
            variant="h6"
            color="initial"
            component="p"
            sx={{ color: dark ? "black" : "white" }}
          >
            Material-UI is a popular React UI framework that provides a set of
            pre-designed and customizable components, styles, and themes
            following the principles of Google's Material Design.
            <br />
            <br /> Let's break down this concept in a plain and simple way:{" "}
            <br />
            <br />
            Scenario:
            <br /> When building a React application, you often need various
            user interface elements such as buttons, forms, and navigation bars.
            Designing these components from scratch can be time-consuming.
            <br />
            <br /> Problem:
            <br /> How do you quickly create a visually appealing and consistent
            user interface in your React application?
            <br />
            <br /> Solution:
            <br /> Material-UI offers a collection of ready-to-use React
            components that follow the Material Design guidelines, making it
            easy to create a modern and consistent look for your application.
          </Typography>
        </Box>
        .
        <br />
        <img src="image/material.png" />
        <br />
        <Box>
          <Typography
            variant="h6"
            color="initial"
            component="p"
            sx={{ color: dark ? "black" : "white" }}
          >
            Explanation: <br />
            Material-UI provides components like Button, TextField, AppBar, etc.
            You can easily use these components by importing them from the
            @mui/material library. Components come with default styles following
            the Material Design principles, but you can customize them to fit
            your application's design. <br /> <br /> Key Points: <br />
            Material-UI is a React UI framework that follows Google's Material
            Design principles. It provides a set of pre-designed and
            customizable components for building modern user interfaces.
            Components are easy to use, and you can import them directly from
            the Material-UI library. Material-UI also offers theming and styling
            options to match your application's look and feel. <br /> <br />
            In simple terms, Material-UI is a toolbox for React developers,
            offering a collection of ready-made components to quickly build a
            visually consistent and modern user interface in line with Material
            Design principles.
          </Typography>
        </Box>
    
      </Box>
    </Main>
  );
};

export default Material;
