import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { changeTheme } from "../store/store.tsx";

function Rightbar() {
  const { dark } = changeTheme();
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"} width={300}>
        <Typography variant="h6" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup max={8}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={3}>
          Latest Photos
        </Typography>
        <ImageList sx={{}} cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>

          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1597645587822-e99fa5d45d25?w=164&h=164&fit=crop&auto=format" />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2} mb={3}>
          Latest Conversation
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem
            alignItems="flex-start"
            sx={{ backgroundColor: dark ? "" : "#1c1e23" }}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", color: dark ? "" : "white" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors " — I'll be in your neighborhood doing errands
                    this…"
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            alignItems="flex-start"
            sx={{ backgroundColor: dark ? "" : "#1c1e23" }}
          >
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", color: dark ? "" : "white" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer " — Wish I could come, but I'm out
                    of town this…"
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem
            alignItems="flex-start"
            sx={{ backgroundColor: dark ? "" : "#1c1e23" }}
          >
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline", color: dark ? "" : "white" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams " — Do you have Paris recommendations? Have you
                    ever…"
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Rightbar;
