import React, { useState } from "react";
import {
  Collapse,
  ListSubheader,
  Skeleton,
  SwipeableDrawer,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  ContactMail,
  DinnerDining,
  ExpandLess,
  ExpandMore,
  Fastfood,
  Home,
  Info,
  StarBorder,
} from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function MobilMenu({ cat, loading }) {
  const [state, setState] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState(open);
  };
  return (
    <>
      <Menu
        htmlColor="black"
        sx={{ display: { sm: "block", md: "none" }, marginRight: "10px" }}
        onClick={toggleDrawer(true)}
      />
      <SwipeableDrawer
        anchor="left"
        open={state}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          // onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List
            sx={{ width: "100%" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontSize: { xs: "1rem", sm: "1rem", md: "1.5rem" },
                    margin: "20px 10px",
                  }}
                >
                  <b style={{ color: "red", textDecoration: "underline" }}>
                    Kendil
                  </b>{" "}
                  Home Kitchen
                </Typography>
              </ListSubheader>
            }
          >
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <Home />
                </ListItemIcon>

                <Typography
                  sx={{ color: "black" }}
                  component="span"
                  variant="body1"
                >
                  Home
                </Typography>
              </ListItemButton>
            </Link>
            <Divider />
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <Fastfood />
              </ListItemIcon>
              <ListItemText primary="Menu" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {loading ? (
                  <ListItemButton sx={{ pl: 4 }}>
                    <Skeleton
                      animation="wave"
                      variant="rectangular"
                      width={"100%"}
                      height={"100px"}
                    />
                  </ListItemButton>
                ) : (
                  <Link to="/">
                    {cat.map((itm, index) => (
                      <ListItemButton sx={{ pl: 4 }} key={index}>
                        <ListItemIcon>
                          <DinnerDining />
                        </ListItemIcon>
                        <Typography
                          sx={{ color: "black" }}
                          component="span"
                          variant="body1"
                        >
                          {itm.name}
                        </Typography>
                      </ListItemButton>
                    ))}
                  </Link>
                )}
              </List>
            </Collapse>
            <Divider />
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>

                <Typography
                  sx={{ color: "black" }}
                  component="span"
                  variant="body1"
                >
                  About
                </Typography>
              </ListItemButton>
            </Link>
            <Divider />
            <Link to="/">
              <ListItemButton>
                <ListItemIcon>
                  <ContactMail />
                </ListItemIcon>

                <Typography
                  sx={{ color: "black" }}
                  component="span"
                  variant="body1"
                >
                  Contact
                </Typography>
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
