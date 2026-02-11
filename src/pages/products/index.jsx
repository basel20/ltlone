import React, {useState} from 'react'
import SearchBar from './searchBar'
import Card from '../../components/card'
import img from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import DetailsCard from '../../components/detailsCard'
import { Outlet } from 'react-router-dom'


const Products = () => {
    
  return (
        <Outlet />

  )
}

export default Products