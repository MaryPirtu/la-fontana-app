export default function CartItem({ produs, removeFromCart }) {
  return (
    <div className="border-t border-gray py-5">
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2 justify-items-center">
          <img alt="img" className="rounded-md" src={produs.productData.img} />
          <div>
            <div className="pb-2">{produs.productData.title}</div>
            {produs.productData.description}
          </div>
        </div>
        <div className="grid grid-cols-3 justify-items-center">
          <div>{produs.productData.price} $</div>
          <div>{produs.productCount}</div>
          <div>
            {(produs.productData.price * produs.productCount).toFixed(1)} $
          </div>
          <div className="text-transparent">.</div>
          <div className="text-transparent">.</div>
          <button
            type="button"
            className="transition hover:text-bgRed hover:delay-100"
            onClick={() => removeFromCart(produs.productData)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
