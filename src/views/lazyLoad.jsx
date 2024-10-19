import { Box, Typography } from "@mui/material";
import React from "react";
import Main from "../components/main/main";


const LazyLoad = () => {
  return (
    <Main>
      <Box>
        <Typography variant="h6" color="initial">
          lazy loading or code splitting
        </Typography>
      </Box>
    </Main>
  );
};

export default LazyLoad;
