import ProductsList from "./productsList";
import products from "../../data.json"


const AllProducts = () => {
  return <ProductsList products={products} />;
} 

export default AllProducts 