import { Box, Checkbox } from "@mui/material";
import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FavoriteBorder } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { changeTheme } from "../store/store.tsx";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Post(props) {
  const { dark } = changeTheme();
  const [expanded, setExpanded] = useState(
    Array(props.newPerson.length).fill(false)
  );

  const handleExpandClick = (index) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <Box flex={4}>
      {props.newPerson?.map((val, index) => (
        <Card key={val.id}
          sx={{
            backgroundColor: dark ? "" : "#1c1e23",
            color: dark ? "" : "white",
            margin: 1,
          }}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe"></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon sx={{ color: dark ? "" : "white" }} />
              </IconButton>
            }
            title={val.name}
            subheader={val.date}
          />
          <CardMedia
            component="img"
            height="20%"
            width="50%"
            image={val.img}
            alt="photos of us"
          />
          <CardContent>
            <Typography variant="body2" sx={{ color: dark ? "" : "white" }}>
              {val.about}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder sx={{ color: dark ? "" : "white" }} />}
                checkedIcon={<Favorite sx={{ color: "blue" }} />}
              />
              <Checkbox
                icon={
                  <BookmarkBorderIcon sx={{ color: dark ? "" : "white" }} />
                }
                checkedIcon={<BookmarkIcon />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon sx={{ color: dark ? "" : "white" }} />
            </IconButton>
            <ExpandMore
              expand={expanded[index]}
              onClick={() => handleExpandClick(index)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon sx={{ color: dark ? "" : "white" }} />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{val.about2}</Typography>
            </CardContent>
          </Collapse>
        </Card>
      ))}
    </Box>
  );
}

export default Post;
