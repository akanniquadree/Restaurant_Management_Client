import React, { useEffect, useState } from "react";
import "./topbar.css";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import { Badge, Box, Stack } from "@mui/material";
import MenuDrop from "./Component/MenuDrop";
import SearchModal from "./Component/SearchModal";
import CartDrop from "./Component/CartDrop";
import MobilMenu from "./Component/MobilMenu";
import ProfileDrop from "./Component/ProfileDrop";
import axios from "axios";

function Topbar() {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch();
    return () => {};
  }, []);
  async function fetch() {
    try {
      const { data } = await axios.get(
        "https://restaurantmanagement-h0y1.onrender.com/api/category",
        { withCredentials: true }
      );
      if (data) {
        setCategory(data);
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar sx={{ backgroundColor: "white" }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Box sx={{ display: { xs: "none", sm: "none", md: "block" } }}>
              <Stack direction="row" spacing={3} alignItems="center">
                <Link to="/" className="option active">
                  <Typography
                    variant="body1"
                    component="a"
                    sx={{ color: "black" }}
                  >
                    Home
                  </Typography>
                </Link>

                {/*Menu DropDown  */}
                <MenuDrop cat={category} loading={loading} />

                <Link to="/about" className="option">
                  <Typography
                    variant="body1"
                    component="a"
                    sx={{ color: "black" }}
                  >
                    About
                  </Typography>
                </Link>

                <Link to="/contact" className="option">
                  <Typography
                    variant="body1"
                    component="a"
                    sx={{ color: "black" }}
                  >
                    Contact
                  </Typography>
                </Link>
              </Stack>
            </Box>
            <Box>
              <Link
                to="/"
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MobilMenu cat={category} loading={loading} />
                <Typography
                  variant="h4"
                  sx={{
                    color: "black",
                    fontSize: { xs: "0.6rem", sm: "1rem", md: "1.5rem" },
                  }}
                >
                  <b style={{ color: "red", textDecoration: "underline" }}>
                    Kendil
                  </b>{" "}
                  Home Kitchen
                </Typography>
              </Link>
            </Box>
            <Box>
              <Stack
                direction="row"
                spacing={{ xs: 2, sm: 3, md: 4 }}
                alignItems="center"
              >
                {/* Search icon Modal after onClick */}
                <SearchModal />

                <CartDrop />

                <ProfileDrop />
              </Stack>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Topbar;
