import React, { useState } from 'react'
import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import PropTypes from 'prop-types';
import { useTheme } from '@emotion/react';
import SwipeableViews from 'react-swipeable-views';



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

export default function UniqueDining() {
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
            <Box sx={{padding:{xs:"60px 0 40px 0",sm:"30px 0 40px 0",md:"100px 0 40px 0"}}}>
                <Typography variant="body2" align="center" component="p" color="error">Favorite Item</Typography>
                <Typography variant="h4" align="center" component="h5">For Unique Dining</Typography>        
            </Box>
            <Box sx={{width:"50%", margin:"auto"}}>
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
                Item One
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
                </TabPanel>
            </SwipeableViews>
        </Container>
    </>
  )
}
