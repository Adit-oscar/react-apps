import { useEffect, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import { getProducts } from "../services/product.service";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [chart, setChart] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  const handlerAddToChart = (id) => {
    setChart((prev) => {
      const isExist = prev.find((item) => item.id === id);
      if (isExist) {
        return prev.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { id, qty: 1 }];
    });
  };

  return (
    <div className="flex justify-center p-5">
      <div className="w-3/4 flex flex-wrap gap-4 justify-center">
        {products.length > 0 &&
          products.map(({ title, description, image, price }, i) => (
            <CardProduct key={i}>
              <CardProduct.Header image={image} title={title} />
              <CardProduct.Body title={title}>{description}</CardProduct.Body>
              <CardProduct.Footer
                id={i}
                price={price}
                handlerAddToChart={() => handlerAddToChart(i)}
              />
            </CardProduct>
          ))}
      </div>
      <div className="w-1/4 sticky top-0 h-fit p-5 ml-5">
        <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Chart</h1>
        <table className="text-left table-auto border-separate border-spacing-x-5">
          <thead>
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Total</td>
            </tr>
          </thead>
          <tbody>
            {chart.length > 0 &&
              chart.map(({ id, qty }, i) => (
                <tr key={i}>
                  <td>{products[id]?.title.substring(0, 10)} ...</td>
                  <td>{products[id]?.price}</td>
                  <td>{qty}</td>
                  <td>{Math.round(products[id]?.price * qty)}</td>
                </tr>
              ))}
            <tr>
              <td colSpan={3} className="font-bold">
                Grand Total
              </td>
              <td className="font-bold">
                Rp.{" "}
                {Math.round(
                  chart.reduce(
                    (acc, item) =>
                      console.log(acc) ||
                      acc + (products[item.id]?.price * item.qty || 0),
                    0
                  )
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
