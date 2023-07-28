import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import "./slide.css"

export default function Slider({slide}) {
  const [slideIndex, setSlideIndex] = useState(1)
  const timeout = useRef(null)

  const nextSlide = () =>{
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    if(slideIndex !== slide.length ){
      setSlideIndex(slideIndex + 1)
    }else{
      setSlideIndex(1)
    }
  }
  const prevSlide = () =>{
  if(timeout.current){
    clearTimeout(timeout.current)
  }
  if(slideIndex !== 1){
    setSlideIndex(slideIndex -1)
  }else{
    setSlideIndex(slide.length)
  }
  }
  const moveDot = (index) =>{
    if(timeout.current){
      clearTimeout(timeout.current)
    }
    setSlideIndex(index)
  }
  useEffect(()=>{
    const moveSlide = () =>{
      if(slideIndex !== slide.length){
        setSlideIndex(slideIndex + 1)
      }else{
        setSlideIndex(1)
      }
    }
    timeout.current = setTimeout(moveSlide, 5000)
    return function (){
      if(timeout.current){
        clearTimeout(timeout.current)
      }
    }
  },[slideIndex])


  return (
    <>
        <Box className="slideWrap">
            <Box className="slide">
              <img src="/Images/slider1.avif"/>
              <Box className="orderCont">
                <Stack direction="column" spacing={3} justifyContent="center">
                  <Typography variant="h3" component="h3" align="center"sx={{color:"white"}}>Hot sauce chicken available</Typography>
                  <Typography variant="body1" component="p" align="center"sx={{color:"white"}}>Search for the keywords to learn more about each error webpack compiled with 1 error and 1 warning</Typography>
                  <Stack direction="row" justifyContent="center" className='orderWrap'>
                        <Button variant="contained" sx="bot" className="bot">
                          Order Now
                        </Button>
                </Stack>
                </Stack>
              </Box>
            </Box>
        </Box>
    </>
  )
}
