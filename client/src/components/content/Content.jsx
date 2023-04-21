import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useContentContext } from "../../context/CartContext";
import ItemCard from "./ItemCard";
import Api from "../../api/api";

export default function Content() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    (async function allProducts() {
      const productData = await Api.getAllProducts();
      const allProductsData = [...productsList, ...productData];
      setProductsList(allProductsData);
    })();
  }, []);

  const { selectedProducts, setSelectedProducts } = useContentContext();

  const addToCart = async (item) => {
    const cartItem = await Api.addToCart(item);
    const newCartState = [...selectedProducts, cartItem];
    setSelectedProducts(newCartState);
  };

  return productsList.map((product) => (
    <div className="mx-auto w-5/6">
      <div className="flex justify-between border-b pb-4 pt-10">
        <div className="text-4xl font-bold">{product.title}</div>
        <Link to="/pizza">
          <a href="replace" className="mt-4">
            GO TO MENU {product.title.toUpperCase()}
          </a>
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-10 sm:grid-cols-5">
        {product.products.map((item) => (
          <ItemCard item={item} addToCart={addToCart} />
        ))}
      </div>
    </div>
  ));
}
