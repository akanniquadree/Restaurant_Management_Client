import React,{useState} from 'react'
import { Add, Close, DeleteForever, Remove } from '@mui/icons-material'
import { Box, Button, ButtonGroup, Container, Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material'
import "./add.css"
import { Link } from 'react-router-dom'
import Topbar from '../../Topbar/Topbar'
import OptionBar from './Component/OptionBar'

export default function AddToCart() {
    const [counter, setCounter] = useState(1)
    const increase = () =>{
        setCounter(counter + 1)
    }
    const decrease = () =>{
        if(counter !== 1){
            setCounter(counter - 1)
        }
        
    }
  return (
    <>
        <Topbar/>
        <Toolbar/>
        <OptionBar/>
        <Container>
            <Stack direction="column" spacing={3} sx={{height:"40vh"}} alignItems={"center"} justifyContent={"center"}>
                <Typography  variant="h4" sx={{color:"black"}} component={"p"}>Your Cart Is Empty</Typography>
                <Button sx={{backgroundColor:"red",color:"white",textTransformation:"lowercase", ":hover":{backgroundColor:"red", opacity:0.6}}} varaint="contained">Continue Shopping</Button>
            </Stack>
            {/* <Grid container spacing={3} mt={2}>
                <Grid item xs={12} sm={12} md={8}>
                    <TableContainer sx={{display:{xs:"none",sm:"none",md:"block"}}}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell></TableCell>
                                    <TableCell align="center">Product</TableCell>
                                    <TableCell align="right">Price</TableCell>
                                    <TableCell align="right">Quantity</TableCell>
                                    <TableCell align="right">Sub-Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell align="right">
                                        <DeleteForever htmlColor='red' fontSize='small'/>
                                    </TableCell>
                                    <TableCell align="right">
                                        <img src="/Images/food2.avif" width="70px" height={"70px"}/>
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        <Link to="/">
                                            <Typography className="optionTwo" variant="body3" sx={{fontSize:"15px", color:"black"}} component={"p"}>Ecosmart fleece hooded sweatshirt</Typography>
                                        </Link>
                                    </TableCell>
                                    <TableCell align="right">90000</TableCell>
                                    <TableCell align="right">
                                    <ButtonGroup size="small" aria-label="small outlined button group" color="inherit">
                                        <Button onClick={increase} >+</Button>
                                            <input type="number" className="inpi" value={counter}></input>
                                        <Button onClick={decrease} disable={counter > 1}>-</Button>
                                    </ButtonGroup>
                                    </TableCell>
                                    <TableCell align="right">90000</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Stack direction="column" rowspacing={3} mt={3} sx={{display:{xs:"flex",sm:"flex",md:"none"}}}>
                        <Box >
                            <img src="/Images/food9.avif" width="100%" height={"200px"}/>
                        </Box>
                        <Stack direction="column" spacing={2}>
                            <Box sx={{display:"flex"}}>
                                <Typography variant="body2" component={"p"} sx={{marginRight:"5px"}}><b>Product: </b></Typography>
                                <Link to="/">
                                    <Typography className="optionTwo" variant="body3" sx={{fontSize:"15px", color:"black"}}  component={"p"}>Ecosmart fleece hooded sweatshirt</Typography>
                                </Link>
                                <Typography variant="body3" sx={{fontSize:"15px"}} component={"p"}>Ecosmart fleece hooded sweatshirt</Typography>
                            </Box>
                            <Box sx={{display:"flex"}} >
                                <Typography variant="body2" component={"p"} sx={{marginRight:"5px"}}><b>Price: </b></Typography>
                                <Typography variant="body3" sx={{fontSize:"15px"}} component={"p"}>#50000</Typography>
                            </Box>
                            <Box sx={{display:"flex",width:"100%", justifyContent:"space-between"}}>
                                <ButtonGroup size="small" aria-label="small outlined button group" color="inherit">
                                    <Button onClick={increase} >+</Button>
                                            <input type="number" className="inpi" style={{width:"70px"}} value={counter}></input>
                                    <Button onClick={decrease} disable={counter > 1}>-</Button>
                                </ButtonGroup>
                                <DeleteForever htmlColor='red' fontSize='small'/>
                            </Box>
                            <Box sx={{display:"flex"}} >
                                <Typography variant="body2" component={"p"} sx={{marginRight:"5px"}}><b>Sub-Total: </b></Typography>
                                <Typography variant="body3" component={"p"}>#50000</Typography>
                            </Box>
                            
                        </Stack>
                        <Divider sx={{color:"#c3c3c3",  marginTop:"15px"}}/>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                        <Stack direction="column" spacing={3} sx={{backgroundColor:"#eee", padding:"10px"}}>
                            <Box>
                                <Typography variant="h5" component="h5">Cart Summary</Typography>
                            </Box>
                            <div>
                                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                    <Typography variant="body2" component="h5"><b>Subtotal</b></Typography>
                                    <Typography variant="body3" component="h5"><b>#9000</b></Typography>
                                </Box>
                                <Divider sx={{color:"#c3c3c3",  marginTop:"7px"}}/>
                            </div>
                            <div>
                                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                    <Typography variant="body2" component="h5"><b>Shipping</b></Typography>
                                    <Typography variant="body3" component="h5"><b>#9000</b></Typography>
                                </Box>
                                <Divider sx={{color:"#c3c3c3", marginTop:"7px"}}/>
                            </div>
                            <div>
                                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                    <Typography variant="body2" component="h5"><b>Shipping</b></Typography>
                                        <Box sx={{display:"flex", flexDirection:"column", marginLeft:"50px"}}>
                                            <FormControl>
                                                <RadioGroup
                                                    aria-labelledby="demo-radio-buttons-group-label"
                                                    defaultValue="flat"
                                                    name="radio-buttons-group"
                                                >
                                                    <FormControlLabel value="flat" control={<Radio size="small"/>} label={ <Typography sx={{fontSize:"12px"}} variant="body4" component="h5">Local pickup: $5.00</Typography>} />
                                                    <FormControlLabel value="local" control={<Radio size="small"/>} label={ <Typography sx={{fontSize:"12px"}} variant="body4" component="h5">Flat rate: $10.00</Typography>}  />
                                                </RadioGroup>
                                            </FormControl>
                                            <Typography variant="body2" sx={{fontSize:"12px"}} component="h5">Shipping options will be updated during checkout.</Typography>
                                        </Box>
                                    
                                </Box>
                                <Divider sx={{color:"#c3c3c3",  marginTop:"7px"}}/>
                            </div>
                            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                                    <Typography variant="body2" component="h5"><b>Total</b></Typography>
                                    <Typography variant="h4" component="h5"><b>#9000</b></Typography>
                            </Box>
                            <Button sx={{backgroundColor:"red",color:"white",textTransformation:"lowercase", ":hover":{backgroundColor:"red", opacity:0.6}}} varaint="contained">Proceed to Checkout</Button>
                        </Stack>
                </Grid>
            </Grid> */}
        </Container>
    </>
  )
}
