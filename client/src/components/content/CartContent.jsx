import CartItem from "./CartItem";

export default function CartContext({ cartItems, removeFromCart }) {
  const deliveryPrice = 10;
  const calcSubtotal = () =>
    cartItems.reduce(
      (accumulator, currentValue) =>
        accumulator +
        currentValue.productCount * currentValue.productData.price,
      0
    );
  return (
    <div>
      <h1 className="px-4 pb-12 text-3xl">Items in your cart</h1>
      <div className="grid grid-cols-2 ">
        <div className="pl-20 text-xl">
          <div>Product(s)</div>
        </div>
        <div className="grid grid-cols-3 justify-items-center text-xl">
          <div className="">Price</div>
          <div className="">Qty</div>
          <div className="">Total:</div>
        </div>
      </div>
      {cartItems.map((produs) => (
        <CartItem produs={produs} removeFromCart={removeFromCart} />
      ))}
      <div className="text-1xl grid grid-cols-2 justify-items-center rounded-md border py-3">
        <div>
          <div>Subtotal</div>
          <div>Delivery</div>
          <div>Total</div>
        </div>
        <div>
          <div>{calcSubtotal().toFixed(1)}$</div>
          <div>{deliveryPrice} $</div>
          <div>{(calcSubtotal() + deliveryPrice).toFixed(1)} $</div>
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <button
          type="button"
          className="w-72 rounded-md bg-bgRed py-3 text-center text-xl text-bgSlate"
        >
          Order
        </button>
      </div>
    </div>
  );
}
