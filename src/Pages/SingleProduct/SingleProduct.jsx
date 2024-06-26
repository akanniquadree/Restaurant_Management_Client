import React, { useEffect, useState } from "react";
import Topbar from "../../Topbar/Topbar";
import {
  Box,
  Button,
  ButtonGroup,
  Tab,
  Tabs,
  Container,
  Rating,
  Stack,
  TextField,
  Toolbar,
  Typography,
  Divider,
  Skeleton,
} from "@mui/material";
import {
  Add,
  ArrowRightAlt,
  FireTruck,
  LockClock,
  Remove,
  ShoppingBasket,
} from "@mui/icons-material";
import "./singleProduct.css";
import PropTypes from "prop-types";
import { useTheme } from "@emotion/react";
import SwipeableViews from "react-swipeable-views";
import { SingleProductData } from "./Component/SingleProductSlider";
import { useParams } from "react-router-dom";
import axios from "axios";

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default function SingleProduct() {
  const theme = useTheme();
  const [slideIndex, setSlideIndex] = useState(1);
  const [value, setValue] = useState(0);
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  const moveDot = (index) => {
    // if(timeout.current){
    //   clearTimeout(timeout.current)
    // }
    setSlideIndex(index);
  };
  const onZoom = (e) => {
    const imga = document.querySelector(".chg");
    const x = e.clientX - e.target.offsetLeft;
    const y = e.clientY - e.target.offsetTop;
    imga.style.transformOrigin = `${x}px ${y}px`;
    imga.style.transform = "scale(2.5)";
  };
  const offZoom = (e) => {
    const imga = document.querySelector(".chg");
    imga.style.transformOrigin = `center center`;
    imga.style.transform = "scale(1)";
  };
  const style = {
    "& .MuiTabs-indicator": {
      backgroundColor: "#ff0303",
    },
    "& .MuiTab-root.Mui-selected": {
      color: "#ff0303",
    },
  };

  useEffect(() => {
    FetchProduct();
    return () => {};
  }, [id]);
  const FetchProduct = async () => {
    try {
      const { data } = await axios.get(
        `https://restaurantmanagement-h0y1.onrender.com/api/product/${id}`
      );
      if (data) {
        setFood(data);
      }
    } catch (error) {
      console.error("Error Fetching Product: ", error);
      setFood(null);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return (
      <>
        <Topbar />
        <Container>
          <Stack direction="column" spacing={3}>
            <Box>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50%" },
                    padding: { xs: 0, sm: "20px", md: "20px" },
                  }}
                >
                  <Skeleton
                    animation="wave"
                    variant="rectangular"
                    width={"100%"}
                    height={"100%"}
                  />
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50%" },
                    padding: { xs: 0, sm: "20px", md: "20px" },
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 1 }} component="h4">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width={"100%"}
                      height={"30px"}
                    />
                  </Typography>
                  <Typography variant="h4" sx={{ mb: 1 }} component="h4">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width={"100%"}
                      height={"30px"}
                    />
                  </Typography>

                  <Typography variant="h6" sx={{ mb: 1 }} component="p">
                    <Skeleton
                      animation="wave"
                      variant="text"
                      width={"100%"}
                      height={"30px"}
                    />
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "black",
                      opacity: 0.6,
                      textDecoration: "line-through",
                      mb: 2,
                    }}
                    component="p"
                  >
                    <Skeleton
                      animation="wave"
                      variant="rectangle"
                      width={"100%"}
                      height={"420px"}
                    />
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Box></Box>
          </Stack>
        </Container>
      </>
    );
  }
  if (!food) {
    return (
      <>
        <h1>Oops Product not Found</h1>
      </>
    );
  } else {
    return (
      <>
        <Topbar />
        <Toolbar />
        <Container>
          <Stack direction="column" spacing={3}>
            <Box>
              <Stack
                direction={{ xs: "column", sm: "column", md: "row" }}
                spacing={2}
              >
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50%" },
                    padding: { xs: 0, sm: "20px", md: "20px" },
                  }}
                >
                  <Stack direction="column" spacing={2}>
                    <div
                      className="singleWrap"
                      onMouseLeave={offZoom}
                      onMouseMove={onZoom}
                      onMouseOver={onZoom}
                    >
                      {food.imgs.map((itm, index) => (
                        <Box
                          className={
                            slideIndex === index + 1
                              ? "single active-animsing"
                              : "single"
                          }
                          key={index}
                        >
                          <img src={itm} alt="food" className="chg" />
                        </Box>
                      ))}
                    </div>
                    <Box>
                      <Stack
                        direction="row"
                        spacing={{ xs: 1, sm: 1, md: 2 }}
                        useFlexGap
                        flexWrap="wrap"
                      >
                        {food.imgs.map((itm, index) => (
                          <img
                            src={itm}
                            className="changeImg"
                            alt="food"
                            onClick={() => {
                              moveDot(index + 1);
                            }}
                            key={index}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
                <Box
                  sx={{
                    width: { xs: "100%", sm: "100%", md: "50%" },
                    padding: { xs: 0, sm: "20px", md: "20px" },
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 1 }} component="h4">
                    {food.name}
                  </Typography>

                  <Typography variant="h6" sx={{ mb: 1 }} component="p">
                    {food.discount}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "black",
                      opacity: 0.6,
                      textDecoration: "line-through",
                      mb: 2,
                    }}
                    component="p"
                  >
                    {food.price}
                  </Typography>
                  <Rating name="read-only" sx={{ mb: 2 }} value={3} readOnly />
                  <Typography
                    variant="p"
                    sx={{ mb: 2 }}
                    align="justify"
                    component="p"
                  >
                    {food.detail}
                  </Typography>
                  <Stack
                    direction="row"
                    spacing={2}
                    alignItems="center"
                    sx={{ mb: 2 }}
                  >
                    <Typography variant="body1" component="p">
                      Category:{" "}
                    </Typography>
                    <Typography variant="body2" component="p">
                      {food.categoryId.name}{" "}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={2}
                    sx={{ mb: 2 }}
                    alignItems="center"
                  >
                    <Typography variant="body1" component="p">
                      Availability:{" "}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "green" }}
                      component="p"
                    >
                      In stock{" "}
                    </Typography>
                  </Stack>
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    spacing={2}
                    sx={{ mb: 2 }}
                    alignItems={{ xs: "center" }}
                  >
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                    >
                      <Button color="error">
                        <Remove />
                      </Button>
                      <input type="number" className="inp" />
                      <Button color="error">
                        <Add />
                      </Button>
                    </ButtonGroup>
                    <Button
                      variant="contained"
                      sx={{ width: { xs: "100%", sm: "153px", md: "153px" } }}
                      className="bot"
                      endIcon={<ShoppingBasket />}
                    >
                      ADD TO CART
                    </Button>
                  </Stack>
                  <Button
                    variant="contained"
                    sx={{
                      width: { xs: "330px", sm: "340px", md: "338px" },
                      mt: 1,
                    }}
                    className="bot"
                    endIcon={<ArrowRightAlt />}
                  >
                    Proceed To CheckOut
                  </Button>
                </Box>
              </Stack>
            </Box>
            <Box>
              <Tabs
                value={value}
                onChange={handleChange}
                // indicatorColor="inherit"
                sx={style}
                textColor="inherit"
                aria-label="full width tabs example"
              >
                <Tab label="Description" {...a11yProps(0)} />
                <Tab label="Shipping" {...a11yProps(1)} />
                <Tab label="Reviews" {...a11yProps(2)} />
              </Tabs>
              <Box sx={{ border: "1px solid #eee ", padding: "20px" }}>
                <SwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={value}
                  onChangeIndex={handleChangeIndex}
                >
                  <TabPanel value={value} index={0} dir={theme.direction}>
                    <Typography variant="h5" component="h5" sx={{ mb: 3 }}>
                      {" "}
                      Recipe Detail
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ mb: 2, whiteSpace: "pre-line" }}
                    >
                      {food.detail}
                    </Typography>
                    <Divider sx={{ mb: 2 }} />
                    <Stack direction="row" spacing={3}>
                      <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                        {" "}
                        <LockClock /> {food.time} to prepare
                      </Typography>
                      <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                        {" "}
                        <FireTruck /> Delivery in 30 minutes
                      </Typography>
                    </Stack>
                    <Divider sx={{ mt: 2 }} />
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ mb: 3, mt: 3 }}
                    >
                      Ingredient Contain
                    </Typography>
                    <Typography
                      variant="body2"
                      component="p"
                      sx={{ mb: 1, whiteSpace: "pre-line" }}
                    >
                      {" "}
                      {food.ingredient}
                    </Typography>
                    <Divider sx={{ mt: 2 }} />
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Food Box Contain
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ mb: 2, whiteSpace: "pre-line" }}
                    >
                      {food.other}
                    </Typography>

                    <Divider sx={{ mb: 3 }} />
                    <Typography variant="body1" component="p">
                      We have made it using only the top quality ingredients. It
                      is completely vegan, and the mayonnaise used in the food
                      is also 100% vegan. The foods are directly made in our
                      kitchen by cooking experts.
                    </Typography>
                  </TabPanel>
                  <TabPanel value={value} index={1} dir={theme.direction}>
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Return and Refund Policy
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Typography variant="body2" component="p">
                      You may return most new, unopened items within 30 days of
                      delivery for a full refund. We'll also pay the return
                      shipping costs if the return is a result of our error (you
                      received an incorrect or defective item, etc.). You should
                      expect to receive your refund within four weeks of giving
                      your package to the return shipper, however, in many cases
                      you will receive a refund more quickly. This time period
                      includes the transit time for us to receive your return
                      from the shipper (5 to 10 business days), the time it
                      takes us to process your return once we receive it (3 to 5
                      business days), and the time it takes your bank to process
                      our refund request (5 to 10 business days). If you need to
                      return an item, simply login to your account, view the
                      order using the 'Complete Orders' link under the My
                      Account menu and click the Return Item(s) button. We'll
                      notify you via e-mail of your refund once we've received
                      and processed the returned item.
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Return and Refund Policy
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Typography variant="body2" component="p" sx={{ mb: 1 }}>
                      We can ship to virtually any address in the world. Note
                      that there are restrictions on some products, and some
                      products cannot be shipped to international destinations.
                      When you place an order, we will estimate shipping and
                      delivery dates for you based on the availability of your
                      items and the shipping options you choose. Depending on
                      the shipping provider you choose, shipping date estimates
                      may appear on the shipping quotes page. Please also note
                      that the shipping rates for many items we sell are
                      weight-based. The weight of any such item can be found on
                      its detail page. To reflect the policies of the shipping
                      companies we use, all weights will be rounded up to the
                      next full pound
                    </Typography>
                  </TabPanel>
                  <TabPanel value={value} index={2} dir={theme.direction}>
                    <Typography
                      variant="h5"
                      component="h5"
                      sx={{ mb: 1, mt: 3 }}
                    >
                      Customer Reviews
                    </Typography>
                    <Typography
                      variant="body2"
                      component="body2"
                      sx={{ mb: 1, mt: 3 }}
                    >
                      <Rating
                        name="read-only"
                        sx={{ mb: 2 }}
                        value={3}
                        readOnly
                      />{" "}
                      Based on 3 reviews
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Rating
                      name="read-only"
                      sx={{ mb: 2 }}
                      value={3}
                      readOnly
                    />
                    <Typography variant="h6" component="p" sx={{ mb: 1 }}>
                      Ultricies tristique nulla aliquet enim tortor at.
                    </Typography>
                    <Typography variant="body2" component="h5" sx={{ mb: 1 }}>
                      <b>John</b> on <b>Jul 19, 2023</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Purus ut faucibus pulvinar elementum integer enim neque
                      volutpat ac. Sapien eget mi proin sed libero enim sed
                      faucibus turpis.
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Rating
                      name="read-only"
                      sx={{ mb: 2 }}
                      value={3}
                      readOnly
                    />
                    <Typography variant="h6" component="p" sx={{ mb: 1 }}>
                      Ultricies tristique nulla aliquet enim tortor at.
                    </Typography>
                    <Typography variant="body2" component="h5" sx={{ mb: 1 }}>
                      <b>John</b> on <b>Jul 19, 2023</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Purus ut faucibus pulvinar elementum integer enim neque
                      volutpat ac. Sapien eget mi proin sed libero enim sed
                      faucibus turpis.
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Rating
                      name="read-only"
                      sx={{ mb: 2 }}
                      value={3}
                      readOnly
                    />
                    <Typography variant="h6" component="p" sx={{ mb: 1 }}>
                      Ultricies tristique nulla aliquet enim tortor at.
                    </Typography>
                    <Typography variant="body2" component="h5" sx={{ mb: 1 }}>
                      <b>John</b> on <b>Jul 19, 2023</b>
                    </Typography>
                    <Typography
                      variant="body1"
                      component="p"
                      sx={{ mb: 2, mt: 3 }}
                    >
                      Purus ut faucibus pulvinar elementum integer enim neque
                      volutpat ac. Sapien eget mi proin sed libero enim sed
                      faucibus turpis.
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                  </TabPanel>
                </SwipeableViews>
              </Box>
            </Box>
          </Stack>
        </Container>
      </>
    );
  }
}
