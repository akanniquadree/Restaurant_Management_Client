import React, { useState } from 'react'
import { Box, Container, Tab, Tabs, Typography, Stack, List, ListItem, ListItemAvatar, Avatar, ListItemText, Divider } from '@mui/material'
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router-dom';



function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
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

export default function UniqueDining({food}) {
    const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  return (
    <>
         <Container>
            <Box sx={{padding:{xs:"60px 0 40px 0",sm:"60px 0 40px 0",md:"100px 0 40px 0"}}}>
                <Typography variant="body2" align="center" component="p" color="error">Favorite Item</Typography>
                <Typography variant="h4" align="center" component="h5">For Unique Dining</Typography>        
            </Box>
            <Box sx={{width:{xs:"90%",sm:"90%",md:"50%"}, margin:"auto"}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="secondary"
                    textColor="secondary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                    centered
                >
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                </Tabs>
            </Box>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={4}>
                        <Box sx={{width:{xs:"100%",sm:"100%",md:"50%"}, backgroundColor:"rgb(255 250 242)"}}>
                            {
                                food.slice(0,2).map((itm, index)=>(
                                    <List sx={{ width: '100%'}} key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar >
                                                <Avatar alt="Remy Sharp" src={itm.img}  sx={{width:"130px", height:"130px"}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                            sx={{ marginLeft:"20px", }}
                                            primary=
                                            {
                                                <Link to="/">
                                                    <Typography
                                                        sx={{display: 'inline', color:"black"}}
                                                        component="span"
                                                        variant="h4"
                                                        className="optionTwo"
                                                    >
                                                    {itm.title}
                                                    </Typography>
                                                </Link>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline', marginTop:"10px"}}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {itm.para}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))
                            }
                        </Box>
                        <Box sx={{width:{xs:"100%",sm:"100%",md:"50%"}, backgroundColor:"rgb(255 250 242)"}}>
                        {
                                food.slice(3,5).map((itm, index)=>(
                                    <List sx={{ width: '100%'}} key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar >
                                                <Avatar alt="Remy Sharp" src={itm.img}  sx={{width:"130px", height:"130px"}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                            sx={{ marginLeft:"20px", }}
                                            primary=
                                            {
                                                <Link to="/">
                                                    <Typography
                                                        sx={{display: 'inline', color:"black"}}
                                                        component="span"
                                                        variant="h4"
                                                        className="optionTwo"
                                                    >
                                                    {itm.title}
                                                    </Typography>
                                                </Link>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline', marginTop:"10px"}}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {itm.para}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))
                            }
                        </Box>
                    </Stack>
                </TabPanel>

                <TabPanel value={value} index={1} dir={theme.direction}>
                <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={4}>
                        <Box sx={{width:{xs:"100%",sm:"100%",md:"50%"}, backgroundColor:"rgb(255 250 242)"}}>
                            {
                                food.slice(6,8).map((itm, index)=>(
                                    <List sx={{ width: '100%'}} key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar >
                                                <Avatar alt="Remy Sharp" src={itm.img}  sx={{width:"130px", height:"130px"}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                            sx={{ marginLeft:"20px", }}
                                            primary=
                                            {
                                                <Link to="/">
                                                    <Typography
                                                        sx={{display: 'inline', color:"black"}}
                                                        component="span"
                                                        variant="h4"
                                                        className="optionTwo"
                                                    >
                                                    {itm.title}
                                                    </Typography>
                                                </Link>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline', marginTop:"10px"}}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {itm.para}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))
                            }
                        </Box>
                        <Box sx={{width:{xs:"100%",sm:"100%",md:"50%"}, backgroundColor:"rgb(255 250 242)"}}>
                        {
                                food.slice(9,11).map((itm, index)=>(
                                    <List sx={{ width: '100%'}} key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar >
                                                <Avatar alt="Remy Sharp" src={itm.img}  sx={{width:"130px", height:"130px"}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                            sx={{ marginLeft:"20px", }}
                                            primary=
                                            {
                                                <Link to="/">
                                                    <Typography
                                                        sx={{display: 'inline', color:"black"}}
                                                        component="span"
                                                        variant="h4"
                                                        className="optionTwo"
                                                    >
                                                    {itm.title}
                                                    </Typography>
                                                </Link>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline', marginTop:"10px"}}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {itm.para}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))
                            }
                        </Box>
                    </Stack>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={4}>
                        <Box sx={{width:{xs:"100%",sm:"100%",md:"50%"}, backgroundColor:"rgb(255 250 242)"}}>
                            {
                                food.slice(0,2).map((itm, index)=>(
                                    <List sx={{ width: '100%'}} key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar >
                                                <Avatar alt="Remy Sharp" src={itm.img}  sx={{width:"130px", height:"130px"}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                            sx={{ marginLeft:"20px", }}
                                            primary=
                                            {
                                                <Link to="/">
                                                    <Typography
                                                        sx={{display: 'inline', color:"black"}}
                                                        component="span"
                                                        variant="h4"
                                                        className="optionTwo"
                                                    >
                                                    {itm.title}
                                                    </Typography>
                                                </Link>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline', marginTop:"10px"}}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {itm.para}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))
                            }
                        </Box>
                        <Box sx={{width:{xs:"100%",sm:"100%",md:"50%"}, backgroundColor:"rgb(255 250 242)"}}>
                        {
                                food.slice(12,14).map((itm, index)=>(
                                    <List sx={{ width: '100%'}} key={index}>
                                        <ListItem alignItems="flex-start">
                                            <ListItemAvatar >
                                                <Avatar alt="Remy Sharp" src={itm.img}  sx={{width:"130px", height:"130px"}}/>
                                            </ListItemAvatar>
                                            <ListItemText
                                            sx={{ marginLeft:"20px", }}
                                            primary=
                                            {
                                                <Link to="/">
                                                    <Typography
                                                        sx={{display: 'inline', color:"black"}}
                                                        component="span"
                                                        variant="h4"
                                                        className="optionTwo"
                                                    >
                                                    {itm.title}
                                                    </Typography>
                                                </Link>
                                            }
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline', marginTop:"10px"}}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {itm.para}
                                                    </Typography>
                                                </React.Fragment>
                                            }
                                            />
                                        </ListItem>
                                        <Divider variant="inset" component="li" />
                                    </List>
                                ))
                            }
                        </Box>
                    </Stack>
                </TabPanel>
            </SwipeableViews>
        </Container>
    </>
  )
}
