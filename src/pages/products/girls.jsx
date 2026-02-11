import ProductsList from "./productsList";
import img from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'

const products = [
  {
    id: 1,
    title: "Blue Jacket",
    category: "Girls",
    price: "15 000 R",
    description: "Warm and comfortable winter jacket.",
    images: [img, img2, img3],
  },
  {
    id: 2,
    title: "Casual Hoodie",
    category: "Boys",
    price: "12 000 R",
    description: "Soft hoodie for everyday wear.",
    images: [img2, img3],
  },
  {
    id: 3,
    title: "Sport T-Shirt",
    category: "Kids",
    price: "8 000 R",
    description: "Lightweight sports t-shirt.",
    images: [img3],
  },
]

const Girls = () => {

    
  return (
    <ProductsList products={products} category="Girls" />
  )
}

export default Girls