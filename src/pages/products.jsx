import { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div className="h-auto grid grid-cols-6 grid-rows-1 gap-3 p-3">
      {products.length > 0 &&
        products.map(({ title, description, image, price }, i) => (
          <CardProduct key={i}>
            <CardProduct.Header image={image} title={title} />
            <CardProduct.Body title={title}>{description}</CardProduct.Body>
            <CardProduct.Footer price={price} />
          </CardProduct>
        ))}
    </div>
  );
}
