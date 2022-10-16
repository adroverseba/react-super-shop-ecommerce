import { ProductItem } from "../components/ProductItem";
import { useGetProducts } from "../hooks/useGetProducts";

import "../styles/ProductList.scss";

const API = "https://enigmatic-journey-93971.herokuapp.com/api/v1/products";

export const ProductList = () => {
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="ProductList">
        {products.map((prod) => (
          <ProductItem product={prod} key={prod.id} />
        ))}
      </div>
    </section>
  );
};
