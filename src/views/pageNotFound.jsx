import React from "react";
import Main from "../components/main/main";
import Typography from '@mui/material/Typography'
import { Box } from "@mui/material";

const PageNotFound = () => {
  return (
    <Main>
      <Box>
        <Typography variant="h1">
            PAGE NOT FOUND
        </Typography>
      </Box>
    </Main>
  );
};

export default PageNotFound;
