import React from 'react'
import Topbar from "../../Topbar/Topbar"
import { Toolbar } from '@mui/material'
import Slider from './Component/Slider/Slider'
import { SliderData } from './Component/SlideData'
export default function Home() {
  return (
    <>
        <Topbar/>
        <Toolbar/>
        <Slider slide={SliderData}/>
    </>
  )
}
