import { Box, Divider, FormControl, Input, InputAdornment, InputLabel, List, ListItem, ListItemText, MenuItem, Pagination, Select, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Product from '../Home/Component/Product/Product';
import { ProductData } from '../Home/Component/Product/ProductData';
import { Toolbar } from '@mui/material'
import Topbar from '../../Topbar/Topbar';
import { Link } from 'react-router-dom';

const style = {
    my:1,
    width:"50%",
    "& label.Mui-focused": {
        color: "#1b1b1b "
      },
    "& ..MuiFormControl-root": {
      "&.Mui-focused input": {
        borderColor: "#1b1b1b ",
        opacity:0.5
      },
      "&.Mui-focused select": {
        borderColor: "#1b1b1b ",
        opacity:0.5
      }
    }
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
            <Stack direction={{xs:"column",sm:"column",md:"row"}} spacing={3}>
                <Box sx={{width:"17%"}}>
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
                        <Box sx={{padding:"10px"}}>
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
                                        <InputLabel htmlFor="standard-adornment-amount">Start Amount</InputLabel>
                                        <Input
                                            id="standard-adornment-amount"
                                            type="number"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </FormControl>
                                    <FormControl style={style} variant="standard">
                                        <InputLabel htmlFor="standard-adornment-amount">End Amount</InputLabel>
                                        <Input
                                            type="number"   
                                            id="standard-adornment-amount"
                                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                        />
                                    </FormControl>
                                    </Stack>
                            
                        </Box>
                        <Box>

                        </Box>
                    </Stack>
                </Box>
                <Box sx={{width:"83%", padding:"20px"}}>
                    <Stack direction="column">
                        <Box>
                            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                                <InputLabel id="demo-select-small-label">Sort By</InputLabel>
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
                        </Box>
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
