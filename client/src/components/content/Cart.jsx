import { useEffect } from "react";
import CartEmpty from "./CartEmpty";
import CartContent from "./CartContent";
import { useContentContext } from "../../context/CartContext";
import Api from "../../api/api";

export default function Cart() {
  const { selectedProducts, setSelectedProducts } = useContentContext();

  const removeFromCart = async (item) => {
    const removeItem = await Api.deleteFromCart(item);
    setSelectedProducts(removeItem);
  };

  async function getCartItems() {
    const cartItems = await Api.getCart();
    setSelectedProducts(cartItems);
  }

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="text-1xl mx-auto mt-10 w-4/5 bg-bgSlate p-5 py-16 font-bold text-stone">
      {selectedProducts.length ? (
        <CartContent
          cartItems={selectedProducts}
          removeFromCart={removeFromCart}
        />
      ) : (
        <CartEmpty />
      )}
    </div>
  );
}
