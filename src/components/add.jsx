import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import styled from "@emotion/styled";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

function Add() {
  const [open, setOpen] = useState(false);

  const StyledModal = styled(Modal)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });

  const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  });
  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 30,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
          <Typography
            variant="h6"
            component="h6"
            color={"gray"}
            textAlign={"center"}
          >
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="" sx={{ width: 30, height: 30 }} />
            <Typography fontWeight={500} variant="span">
              Ralph Santolorin
            </Typography>
          </UserBox>
          <TextField
            fullWidth
            id="standard-multiline-static"
            multiline
            rows={4}
            placeholder="whats on your mind?"
            variant="standard"
          />
          <Stack direction={"row"} gap={1} mt={1} mb={3}>
            <EmojiEmotionsIcon color="error" />
            <ImageIcon color="primary" />
            <VideoCallIcon color="success" />
            <PersonAddIcon color="secondary" />
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="Basic button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{width: '100px'}}>
            <DateRangeIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
}

export default Add;
