import ProductsList from "./productsList";
import products from "../../data.json";

const Boys = () => {

    
  return (
    <ProductsList products={products} category="Boys" />
  )
}

export default Boys