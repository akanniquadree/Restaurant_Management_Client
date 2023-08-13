import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import "./slide.css"
import { ArrowLeft, ArrowRight } from "@material-ui/icons"


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
    timeout.current = setTimeout(moveSlide, 50000)
    return function (){
      if(timeout.current){
        clearTimeout(timeout.current)
      }
    }
  },[slideIndex])


  return (
    <>
        <Box className="slideWrap">
          {
            slide.map((item, index)=>(
              <Box className={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={index}>
                <img src={item.img} alt="food"/>
                <Box className="orderCont">
                  <Stack direction="column" spacing={3} justifyContent="center">
                    <Typography variant="h3" component="h3" align="center"sx={{color:"white"}}>{item.title}</Typography>
                    <Typography variant="body1" component="p" align="center"sx={{color:"white"}}>{item.para}</Typography>
                    <Stack direction="row" justifyContent="center" className='orderWrap'>
                          <Button variant="contained"  className="bot">
                            Order Now
                          </Button>
                  </Stack>
                  </Stack>
                </Box>
              </Box>
              
            ))
          }
          <ArrowLeft  className="back " htmlColor="white" onClick={prevSlide}/>
          <ArrowRight className="back next" htmlColor="white" onClick={nextSlide}/>
          <div className="contDot">
              {Array.from({length:slide.length}).map((item, index)=>(
                <div className={ slideIndex === index +1 ? "dots sliactive": "dots"} onClick={()=>{moveDot(index + 1)}} key={index}></div>
              ))}
            </div>
        </Box>
    </>
  )
}
