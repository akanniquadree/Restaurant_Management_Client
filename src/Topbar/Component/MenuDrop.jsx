import React, { useState } from "react";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { ArrowDropDown } from "@mui/icons-material";
import { Skeleton, Stack } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  popOverRoot: {
    pointerEvents: "none",
  },
});
// Random Array
function Shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function MenuDrop({ cat, loading }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let currentlyHovering = false;
  const styles = useStyles();

  //Large Screen Menu Dropdown
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  //Large Screen Menu Dropdown
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleHover() {
    currentlyHovering = true;
  }
  function handleCloseHover() {
    currentlyHovering = false;
    setTimeout(() => {
      if (!currentlyHovering) {
        handleClose();
      }
    }, 50);
  }
  if (loading) {
    <React.Fragment>
      <Link
        to="#"
        className="option"
        style={{ display: "flex", alignItems: "center" }}
        // onClick={handleClick}
        onMouseOver={handleClick}
        onMouseLeave={handleCloseHover}
        aria-controls={open ? "long-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Typography variant="body1" component="a" sx={{ color: "black" }}>
          Menu
        </Typography>
        <ArrowDropDown size="tiny" htmlColor="black" ml={2} />
      </Link>
      <Menu
        anchorEl={anchorEl}
        id="long-menu"
        open={open}
        onClose={handleClose}
        onMouseLeave={handleClose}
        MenuListProps={{
          onMouseEnter: handleHover,
          onMouseLeave: handleCloseHover,
          style: { pointerEvents: "auto" },
        }}
        PopoverClasses={{
          root: styles.popOverRoot,
        }}
        PaperProps={{
          elevation: 0,
          sx: {
            // overflowY: "scroll",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            flexWrap: "wrap",
            maxHeight: "500px",
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              left: "130px",
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={"100%"}
          height={"100%"}
        />
      </Menu>
    </React.Fragment>;
  } else {
    return (
      <React.Fragment>
        <Link
          to="#"
          className="option"
          style={{ display: "flex", alignItems: "center" }}
          // onClick={handleClick}
          onMouseOver={handleClick}
          onMouseLeave={handleCloseHover}
          aria-controls={open ? "long-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
        >
          <Typography variant="body1" component="a" sx={{ color: "black" }}>
            Menu
          </Typography>
          <ArrowDropDown size="tiny" htmlColor="black" ml={2} />
        </Link>
        <Menu
          anchorEl={anchorEl}
          id="long-menu"
          open={open}
          onClose={handleClose}
          onMouseLeave={handleClose}
          MenuListProps={{
            onMouseEnter: handleHover,
            onMouseLeave: handleCloseHover,
            style: { pointerEvents: "auto" },
          }}
          PopoverClasses={{
            root: styles.popOverRoot,
          }}
          PaperProps={{
            elevation: 0,
            sx: {
              // overflowY: "scroll",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              flexWrap: "wrap",
              maxHeight: "500px",
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                left: "130px",
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <Stack
            direction="row"
            // spacing={3}
            sx={{
              flexWrap: "wrap",
            }}
          >
            {cat?.map((item, index) => (
              <Box key={index}>
                <MenuItem>
                  <Link to="/" style={{ textAlign: "center" }}>
                    <Typography
                      variant="h6"
                      component="a"
                      sx={{
                        marginBottom: "15px",
                        textAlign: "center",
                        color: "black",
                        fontWeight: "800",
                      }}
                    >
                      {item.name}
                    </Typography>
                  </Link>
                </MenuItem>
                {Shuffle(item.productId)
                  .slice(0, 5)
                  .map((prod, idx) => (
                    <MenuItem key={idx}>
                      <Link to={`/product/${prod._id}/${prod.name}`}>
                        <Typography
                          variant="body1"
                          component="a"
                          sx={{ color: "black" }}
                        >
                          {prod.name}
                        </Typography>
                      </Link>
                    </MenuItem>
                  ))}

                <MenuItem>
                  <Link to="/">
                    <Typography
                      variant="body1"
                      component="a"
                      sx={{ color: "black" }}
                    >
                      See All
                    </Typography>
                  </Link>
                </MenuItem>
              </Box>
            ))}
          </Stack>
          {/* 
          <Avatar /> Profile
        </MenuItem>
        <MenuItem >
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem >
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem> */}
        </Menu>
      </React.Fragment>
    );
  }
}

export default MenuDrop;
