import {
  Box,
  Collapse,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import {
  Home,
  PostAdd,
  Group,
  Storefront,
  EmojiPeople,
  AccountBox,
  Settings,
  ModeNight,
  Person,
  Password,
  WbSunny,
} from "@mui/icons-material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const Sidebar = ({onChangeMode}) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState(["nightMode"]);
  const [mode, setMode] = useState("light");

  const handleClick = () => {
    setOpen(!open);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
      setMode("light");
      onChangeMode("light");
    } else {
      newChecked.splice(currentIndex, 1);
      setMode("dark");
      onChangeMode("dark");
    }

    setChecked(newChecked);
  };

  return (
    <Box
      flex={1}
      // position="fixed"
      bgcolor="#c9c9c9"
      p={1}
      m={0}
      height="100vh"
      sx={{
        display: { xs: "none", sm: "flex" },
        borderRight: "1px solid #a9a9a9",
        flexDirection: "column",
        justifyContent: "space-between",
        paddingBottom: "55px",
      }}
    >
      <List component="nav" aria-labelledby="nested-list-subheader">
        <ListItemButton component="a" href="#home">
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
        <ListItemButton component="a" href="#pages">
          <ListItemIcon>
            <PostAdd />
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>
        <ListItemButton component="a" href="#Groups">
          <ListItemIcon>
            <Group />
          </ListItemIcon>
          <ListItemText primary="Groups" />
        </ListItemButton>
        <ListItemButton component="a" href="#MarketPlace">
          <ListItemIcon>
            <Storefront />
          </ListItemIcon>
          <ListItemText primary="MarketPlace" />
        </ListItemButton>
        <ListItemButton component="a" href="#Friends">
          <ListItemIcon>
            <EmojiPeople />
          </ListItemIcon>
          <ListItemText primary="Friends" />
        </ListItemButton>
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <AccountBox />
          </ListItemIcon>
          <ListItemText primary="Profile" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="MyAccount" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemIcon>
                <Password />
              </ListItemIcon>
              <ListItemText primary="Change password" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <List sx={{ borderTop: "1px solid #ffffff" }}>
        <ListItem disablePadding>
          <ListItemButton component="a" href="#Setting">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Setting" />
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            {mode === "light" ? <WbSunny color="secondary" /> : <ModeNight />}
          </ListItemIcon>
          <ListItemText id="switch-list-label-nightMode" primary={mode} />
          <Switch
            color="secondary"
            edge="end"
            onChange={handleToggle("nightMode")}
            checked={checked.indexOf("nightMode") !== -1}
            inputProps={{
              "aria-labelledby": "switch-list-label-nightMode",
            }}
          />
        </ListItem>
      </List>
    </Box>
  );
};

export default Sidebar;
