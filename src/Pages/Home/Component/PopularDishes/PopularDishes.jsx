import React from 'react'
import styled from '@emotion/styled';
import { Box, Container, Stack, Typography, ButtonBase} from '@mui/material'
// import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Stack, Typography } from '@mui/material'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./popular.css"

export default function PopularDishes({slide}) {
  const pf = process.env.REACT_APP_PUBLIC_FOLDER
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 300,
  // [theme.breakpoints.down('sm')]: {
  //   width: '100% !important', // Overrides inline-style
  //   height: 100,
  // },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // color: theme.palette.common.white,
  color: "white",
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "black",
  opacity: 0.4,
  transition:"opacity 0.5s ease",
  // transition: theme.transitions.create('opacity'),
}));
const ImageMarked = styled('span')(({ theme }) => ({
  height: 3,
  width: 18,
  backgroundColor: "white",
  position: 'absolute',
  bottom: -2,
  left: 'calc(50% - 9px)',
  transition: "opacity 0.5s ease",
}));
  return (
    <>
    {/* rgb(255 250 242) */}
      <Box sx={{backgroundColor:"rgb(255 250 242)"}}>
        <Container>
            <Stack direction={{xs:"column", sm:"column", md:"row"}} sx={{padding:{xs:"60px 0 40px 0",sm:"60px 0 40px 0",md:"100px 0 70px 0"}}}>
              <Box sx={{width:{xs:"100%",sm:"100%",md:"25%"}, marginBottom:{xs:"20px", sm:"20px", md:"0"}}}>
                <Typography variant="body2" align="center" component="p" color="error">Popular Dishes Of</Typography>
                <Typography variant="h4" align="center" component="h5">Our Restaurant</Typography>
              </Box>
              <Box sx={{width:{xs:"100%", sm:"100%",md:"70%"}, margin:{xs:"0",sm:"0",md:"0 40px"}}}>
                <Typography variant="body1" align='justify' component="p">Commodo Sed Egestas Egestas Fringilla Phasellus Faucibus Scelerisque Eleifend Donec. Porttitor Massa Id Neque Aliquam Vestibulum Morbi Blandit Cursus Risus. Orci Ac Auctor Augue Mauris Augue Neque Gravida In Aliquam.</Typography>
              </Box>
            </Stack>
            <Carousel responsive={responsive} >
              {
                slide.map((item)=>(
                  <ImageButton
                  focusRipple
                  key={item.title}
                  style={{
                    width: "90%",
                    marginBottom:"50px"
                  }}
                  className='imgCont'
                >
                  <img className='imageSlide' />
                  <ImageSrc style={{ backgroundImage: `url(${item.img})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                    <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                        position: 'relative',
                        p: 4,
                        pt: 2,
                        pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                    >
                      <span style={{color:"red",display:"block"}}>{item.title}</span>
                        Order now
                      <ImageMarked className="MuiImageMarked-root" />
                    </Typography>
                  </Image>
                </ImageButton>
                ))
              }
              

              {/* <Card sx={{ maxWidth: 250 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="250"
                    image="/Images/slider1.avif"
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card> */}
            </Carousel>
        </Container>
      </Box>
    </>
  )
}
