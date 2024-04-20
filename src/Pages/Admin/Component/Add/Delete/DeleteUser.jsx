import React, { useState, useEffect } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Snackbar,
  Stack,
  Typography,
} from "@mui/material";

export default function DeleteUser({
  cat,
  setOpen,
  loading,
  handleDelete,
  error,
  message,
}) {
  const [state, setState] = useState({
    open: false,
    vertical: "top",
    horizontal: "right",
  });
  useEffect(() => {
    if (message || error) {
      setState({ ...state, open: true });
      // const timer = setTimeout(() => {
      //   setOpen(false);
      // }, 3000);
      // return () => clearTimeout(timer);
    }
  }, [message, error]);
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Stack direction="column" spacing={4}>
        {cat ? (
          <Typography variant="h5" component={"h5"} align="center">
            Are you sure you want to delete{" "}
            <p
              style={{ fontSize: "17px", fontWeight: "500", marginTop: "7px" }}
            >
              Deleting this Category will also means deleting all products under
              it
            </p>
          </Typography>
        ) : (
          <Typography variant="h5" component={"h5"} align="center">
            Are you sure you want to delete{" "}
          </Typography>
        )}
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button variant="contained" color="error" onClick={handleDelete}>
            {loading ? (
              <CircularProgress size="12px" style={{ color: "white" }} />
            ) : (
              "Yes"
            )}
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={() => setOpen(false)}
          >
            No
          </Button>
        </Stack>
      </Stack>
      <Snackbar
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        sx={{ top: "75px !important" }}
        anchorOrigin={{ vertical, horizontal }}
      >
        <Alert
          onClose={handleClose}
          severity={message ? "success" : "error"}
          sx={{ width: "100%" }}
        >
          {message ? message : error}
        </Alert>
      </Snackbar>
    </Box>
  );
}
