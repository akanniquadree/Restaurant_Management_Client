import React from 'react'
import Topbar from "../../Topbar/Topbar"
import { Toolbar } from '@mui/material'
import Slider from './Component/Slider/Slider'
import { SliderData } from './Component/Slider/SlideData'
import PopularDishes from './Component/PopularDishes/PopularDishes'
import { PopularData } from './Component/PopularDishes/PopolarData'
import Product from './Component/Product/Product'
import UniqueDining from './Component/UniqueDining/UniqueDining'
import { ProductData } from './Component/Product/ProductData'
import { UniqueData } from './Component/UniqueDining/UniqueData'
import Offer from './Component/Offer/Offer'



export default function Home() {
  return (
    <>
        <Topbar/>
        <Toolbar/>
        <Slider slide={SliderData}/>
        <PopularDishes slide={PopularData}/>
        <Product product={ProductData} />
        <UniqueDining food={UniqueData} title="Yummy & Delicious" para="Chef's Iconic Menu"/>
        <Offer/>
    </>
  )
}
