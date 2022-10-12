import { ProductItem } from "../components/ProductItem";
import { useGetProducts } from "../hooks/useGetProducts";

import "../styles/ProductList.scss";

const API = "https://api.escuelajs.co/api/v1/products?limit=10&offset=0";

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
