import { Box, Divider, FormControl, FormControlLabel, FormLabel, Input, InputAdornment, InputLabel, List, ListItem, ListItemText, MenuItem, Pagination, Radio, RadioGroup, Select, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Product from '../Home/Component/Product/Product';
import { ProductData } from '../Home/Component/Product/ProductData';
import { Toolbar } from '@mui/material'
import Topbar from '../../Topbar/Topbar';
import { Link } from 'react-router-dom';



const searchStyle ={
    "& label.Mui-focused": {
        color: "#1b1b1b "
      },
      '& .MuiOutlinedInput-input:focused':{
        borderColor: "#1b1b1b ",
        opacity:0.5
      },
      "& .MuiOutlinedInput-root": {
           
        "&.Mui-focused fieldset": {
          borderColor: "#1b1b1b ",
          opacity:0.5
        }
    }
}
const sortStyle ={
    m: 1,
    marginTop:0, 
    minWidth: 150,
    "& label.Mui-focused": {
        color: "#1b1b1b "
      },
      '& .MuiOutlinedInput-input:focused':{
        borderColor: "#1b1b1b ",
        opacity:0.5
      },
      "& .MuiOutlinedInput-root": {
        "&.Mui-focused fieldset": {
            borderColor: "#1b1b1b ",
            opacity:0.5
        }
      }
}

const style = {
    my:1,
    width:"50%",
    "& label.Mui-focused": {
        color: "#1b1b1b "
      },
      '& .MuiInput-input::after':{
        borderColor: "#1b1b1b ",
        opacity:0.5
      },
      "& .MuiInput-root": { 
        "&.Mui-focused fieldset": {
        borderColor: "#1b1b1b ",
        opacity:0.5
    }
      },
  }

export default function ProductPage() {
    const [age, setAge] = useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
  return (
    <>
        <Topbar/>
        <Toolbar/>
        <Box>
            <Stack direction={{xs:"column",sm:"row",md:"row"}} spacing={3}>
                <Box sx={{width:{xs:"100%", sm:"24%" ,md:"17%"}}}>
                    <Stack direction="column" spacing={1}>
                        <Box sx={{padding:"10px"}}>
                        <List >
                            <ListItem>
                                <ListItemText
                                    primary= "Categorys"
                                />
                                
                            </ListItem>
                            <Divider  component="li"/>
                            <ListItem>
                                <ListItemText
                                    primary=
                                    {
                                        <Link to="/"><Typography variant="body1" className="optionTwo" component="h5" sx={{color:"black", marginLeft:"5px"}}>African Foods</Typography></Link>
                                    }
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary=
                                    {
                                        <Link to="/"><Typography variant="body1" className="optionTwo" component="h5" sx={{color:"black", marginLeft:"5px"}}>Chinese Foods</Typography></Link>
                                    }
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary=
                                    {
                                        <Link to="/"><Typography variant="body1" className="optionTwo" component="h5" sx={{color:"black", marginLeft:"5px"}}>Italian Food</Typography></Link>
                                    }
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary=
                                    {
                                        <Link to="/"><Typography variant="body1" className="optionTwo" component="h5" sx={{color:"black", marginLeft:"5px"}}>korea Foods</Typography></Link>
                                    }
                                    
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary=
                                    {
                                        <Link to="/"><Typography variant="body1" className="optionTwo" component="h5" sx={{color:"black", marginLeft:"5px"}}>Fast Foods</Typography></Link>
                                    }
                                    
                                />
                            </ListItem>
                           </List>
                        </Box>
                        <Typography variant="h5" component="p" sx={{padding:"10px 10px 0 10px"}}>Filter:</Typography>
                        <Box sx={{padding:"0 10px 10px 10px"}}>
                            <List >
                                <ListItem>
                                    <ListItemText
                                        primary= "Price"
                                    />
                                </ListItem>
                                <Divider sx={{marginBottom:"10px"}}/>
                            </List> 
                                    <Stack direction="row" spacing={1} >
                                    <FormControl style={style} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Min Amount:</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            type="number"
                                            className="aff"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </FormControl>
                                    <FormControl style={style} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">Max Amount:</InputLabel>
                                        <Input
                                            type="number"   
                                            id="standard-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </FormControl>
                                    </Stack>
                            
                        </Box>
                        <Box sx={{padding:"10px"}}>
                            <List >
                                <ListItem>
                                    <ListItemText
                                        primary= "Discount Percentage"
                                    />
                                </ListItem>
                                <Divider sx={{marginBottom:"10px"}}/>
                            </List> 
                            <FormControl>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="female" control={<Radio  sx={{'&.Mui-checked': {color: "#ff0303"}}}/>} label="50% or more" />
                                    <FormControlLabel value="male" control={<Radio  sx={{'&.Mui-checked': {color: "#ff0303"}}}/>} label="30% or more" />
                                    <FormControlLabel value="other" control={<Radio  sx={{'&.Mui-checked': {color: "#ff0303"}}}/>} label="20% or more" />
                                    <FormControlLabel value="others" control={<Radio  sx={{'&.Mui-checked': {color: "#ff0303"}}}/>} label="10% or more" />
                                </RadioGroup>
                                
                            </FormControl>
                        </Box>
                    </Stack>
                </Box>
                <Box sx={{width:{xs:"100%",sm:"76%",md:"83%"}, padding:"20px"}}>
                    <Stack direction="column">
                        <Stack direction="row" justifyContent="space-between">
                            <FormControl sx={sortStyle}  size="small">
                                <InputLabel id="demo-select-small-label">Sort</InputLabel>
                                <Select
                                    labelId="demo-select-small-label"
                                    id="demo-select-small"
                                    value={age}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value="">
                                    <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Best selling</MenuItem>
                                    <MenuItem value={20}>Alphabetically, A-Z</MenuItem>
                                    <MenuItem value={30}>Alphabetically, Z-A</MenuItem>
                                    <MenuItem value={30}>Price, low to high</MenuItem>
                                    <MenuItem value={30}>Price, high to low</MenuItem>
                                    <MenuItem value={30}>Date, old to new</MenuItem>
                                    <MenuItem value={30}>Date, new to old</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField id="outlined-search" sx={searchStyle} label="Search field" type="search" size="small" />
                        </Stack>
                        <Box>
                            <Product product={ProductData} para="African Foods"/>
                                <Stack direction="row" sx={{marginTop:"30px"}} justifyContent="center">
                                <Pagination count={10} color="error" showFirstButton showLastButton /></Stack>
                        </Box>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    </>
  )
}
