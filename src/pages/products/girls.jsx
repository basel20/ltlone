import ProductsList from "./productsList";
import products from "../../data.json";

const Girls = () => {

    
  return (
    <ProductsList products={products} category="Girls" />
  )
}

export default Girls