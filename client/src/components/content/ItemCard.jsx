export default function ItemCard({ item, addToCart }) {
  return (
    <div className="flex flex-col justify-between rounded-lg border-2 border-solid border-transparent p-2  transition hover:border-colorYellow hover:delay-100">
      <img className="my-1 rounded-lg" src={item.src} alt={item.title} />
      <p className="p-2"> {item.title} </p>
      <button
        type="button"
        onClick={() => addToCart(item)}
        className="flex justify-between rounded-lg border-2 border-solid border-colorYellow p-2 pr-2 pl-2 text-base transition hover:bg-colorYellow hover:text-stone hover:delay-100 md:text-lg"
      >
        <p>$ {item.price}</p>
        <div>Order</div>
      </button>
    </div>
  );
}
