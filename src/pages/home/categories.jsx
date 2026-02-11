import React from 'react'
import boy from '../../assets/boys.jpg'
import girl from '../../assets/girl.jpg'
import baby from '../../assets/baby.jpg'
import { useNavigate } from 'react-router-dom'

const CategoryCard = ({image, link}) => {
    const navigate = useNavigate()

    return(
        <div className='h-96 w-96 bg-cover bg-center shadow-xl'
        style={{backgroundImage:`url(${image})`}} onClick={() => navigate(link)}>

        </div>
    )
}

const Categories = () => {
  return (
    <div className='py-16 px-16 flex items-center justify-center'>
        <CategoryCard image={boy} link={"/products/boys"} />
        <CategoryCard image={girl} link={"/products/girls"}/>
        <CategoryCard image={baby} link={"/products/babies"}/>
    </div>
  )
}

export default Categories