import { Pageview, ShoppingBag } from '@mui/icons-material'
import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Fab, Grid, Rating, Stack, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./product.css"

export default function Product({product}) {
  return (
    <>
        <Container>
            <Box sx={{padding:{xs:"30px 0 40px 0",sm:"30px 0 40px 0",md:"50px 0 70px 0"}}}>
                <Typography variant="body2" align="center" component="p" color="error">Yummy & Delicious</Typography>
                <Typography variant="h4" align="center" component="h5">Chef's Iconic Menu</Typography>        
            </Box>
            <Grid container spacing={3}>
                {
                    product.map((itm, index)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                            <Card sx={{ maxWidth:{ xs:400,sm:380,md:345} }}>
                                <CardActionArea>
                                    <div className="toolImg">
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={itm.img}
                                        alt="food"
                                        
                                    />
                                    <Stack direction="column" spacing={4} alignItems="flex-end" className="tool">
                                        <Tooltip title="Add to Cart" arrow placement="left">
                                            <Fab size="small" color="error" aria-label="shoppingbag">
                                                <ShoppingBag size="small"/>
                                            </Fab>
                                        </Tooltip>
                                        <Tooltip title="Quick View" arrow placement="left">
                                            <Fab size="small" color="error" aria-label="pageview">
                                                <Pageview size="small"/>
                                            </Fab>
                                        </Tooltip>
                                    </Stack></div>
                                    <Link to="/">   
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" align="center" component="div" style={{color:"black"}} className="optionTwo">
                                                Fried Chicken
                                            </Typography>
                                            <Typography variant="body2" align="center" color="text.secondary">
                                                $300
                                            </Typography>
                                            <Stack direction="row" justifyContent="center" spacing={3}>
                                                <Rating name="read-only" value={3} readOnly />
                                            </Stack>
                                        </CardContent>
                                    </Link>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))
                }
                
            </Grid>
        </Container>
    </>
  )
}
