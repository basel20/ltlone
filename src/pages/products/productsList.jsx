import React, {useState} from 'react'
import SearchBar from './searchBar'
import Card from '../../components/card'
import DetailsCard from '../../components/detailsCard'
import { Outlet } from 'react-router-dom'


const ProductsList = ({products, category }) => {
  const [selectedProduct, setSelectedProduct] = useState(null)


  const [filters, setFilters] = useState({
    search: '',
  });

  //const { data, loading, error } = useSelector((state) => state.services);

  // if (loading) return <p>Loading services...</p>;
  // if (error) return <p>Error loading services: {error}</p>;

  const filteredproducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase());
    const matchesCategory = !category || product.category.toLowerCase() === category.toLowerCase();
    return matchesSearch &&  matchesCategory;
  });
    
  return (
    <div className='w-full flex flex-col justify-center items-center py-16 gap-8'>
        <SearchBar onSearch={setFilters}/>

        <p className='text-left pb-4 px-32'>
        Seamless bookings, unforgettable experiences with Booky
      </p>

      <div className='px-32 pb-16 flex flex-wrap justify-center gap-16'>
        {filteredproducts.map((product, index) => ( 
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
    </div>
  )
}

export default ProductsList 