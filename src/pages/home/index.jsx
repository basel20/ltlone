import React, {useState} from 'react'
import Slider from './slider'
import img from '../../assets/1.jpg'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import Categories from './categories'
import Card from '../../components/card'
import DetailsCard from '../../components/detailsCard'
import Title from '../../components/title' 
import Whatsapp from '../../components/whatsapp'

const products = [
  {
  id: 1,
  title: "Blue Jacket",
  category: "Girls",
  price: "15 000 R",
  description:
    "A warm and comfortable winter jacket designed to keep your child cozy during cold days. Made from high-quality insulated fabric with a soft inner lining, it provides excellent protection against wind and chilly weather. Features a durable zipper, secure pockets, and a stylish modern fit that’s perfect for school, outdoor activities, and everyday wear.",
  images: [img, img2, img3],
},
{
  id: 2,
  title: "Casual Hoodie",
  category: "Boys",
  price: "12 000 R",
  description:
    "This soft and breathable casual hoodie is perfect for everyday comfort and style. Crafted from premium cotton blend fabric, it feels gentle on the skin while keeping warmth locked in. Designed with an adjustable hood, front kangaroo pocket, and relaxed fit, it’s ideal for playtime, sports, or lounging at home.",
  images: [img2, img3],
},
{
  id: 3,
  title: "Sport T-Shirt",
  category: "Kids",
  price: "8 000 R",
  description:
    "A lightweight and flexible sports t-shirt built for active kids. Made with moisture-wicking material that keeps sweat away and ensures all-day freshness. The breathable fabric and stretch design allow maximum movement, making it perfect for training, outdoor games, and daily activities while maintaining a clean and sporty look.",
  images: [img3],
}

]

const Home = () => {
    const [selectedProduct, setSelectedProduct] = useState(null)
    const slides = [
    {
      image: img,
      title: "WE ARE",
      description: "EVERYWHERE",
    },
    {
      image: img2,
      title: "A LEGACY",
      description: "IN THE MAKING",
    },
    {
      image: img3,
      title: "OUR WORK IS",
      description: "DRIVE AND PASSION",
    },
    {
      image: img3,
      title: "ْعلمنا هو",
      description: "القيادة و الطموح",
    },
  ];
  return (
    <div className='relative'>
        <Slider slides={slides}/>
        <Title title={'Categories'} text={'Observe types of clothes'}/>
        <Categories />
        <Title title={'Products'} text={'Observe types of Products'}/>
        <div className='px-32 pb-16 flex flex-wrap justify-center gap-20'>
             {products.map((product, index) => (
          <Card
            key={product.id}
            product={product}
            onClick={() => setSelectedProduct(product)}
            />
        ))}
        </div>
        
        {selectedProduct && <DetailsCard
            onClose={() => setSelectedProduct(null)}
            images={selectedProduct.images}
            product={selectedProduct}
        />}

        <Whatsapp />
    </div>
  )
}

export default Home