import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} m={0} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" p={5}>
        <Typography variant="h4" fontWeight={100}>
          Online Friends
        </Typography>
        <AvatarGroup total={24} max={10}>
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Agnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar sx={{ width: 56, height: 56 }} alt="test" src="" />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="bTravis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="dAgnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="sTrevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="yTravis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="rAgnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="qTrevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="bTravis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="dAgnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="sTrevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="yTravis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="rAgnes Walker"
            src="https://material-ui.com/static/images/avatar/4.jpg"
          />
          <Avatar
            sx={{ width: 56, height: 56 }}
            alt="qTrevor Henderson"
            src="https://material-ui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography variant="h4" fontWeight={100} mt={3}>
          Latest Images
        </Typography>
        <ImageList cols={3} rowHeight={200} gap={5}>
          <ImageListItem>
            <img
              src={require("../assets/images/Feed01.jpg")}
              srcSet={require("../assets/images/Feed01.jpg")}
              alt="Test 01"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require("../assets/images/Feed02.jpg")}
              srcSet={require("../assets/images/Feed02.jpg")}
              alt="Test 02"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require("../assets/images/Feed03.jpg")}
              srcSet={require("../assets/images/Feed03.jpg")}
              alt="Test 03"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require("../assets/images/Feed04.jpg")}
              srcSet={require("../assets/images/Feed04.jpg")}
              alt="Test 04"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require("../assets/images/Feed05.jpg")}
              srcSet={require("../assets/images/Feed05.jpg")}
              alt="Test 05"
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={require("../assets/images/Feed06.jpg")}
              srcSet={require("../assets/images/Feed06.jpg")}
              alt="Test 06"
              loading="lazy"
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h4" fontWeight={100} mt={3}>
          Latest Conversation
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://material-ui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://material-ui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://material-ui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
