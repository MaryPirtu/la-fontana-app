import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function Pizza() {
  const producstList = [
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/458d6f79cac9387227ac51300775d91d.jpg",
      alt: "pizza",
      title: "Pizza Margherita",
      price: 13.05,
      img: "https://andys.md/public/menu/thumbs/version_150x100x1/fae8714cda041044bbeeee22fb1e9fe6.jpg",
      description:
        "Pizza with ripe tomatoes sauce, fresh basil and mozzarella cheese.",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9b5bea5799ee6f55575ec80fa81c8558.jpg",
      alt: "pizza",
      title: "Pizza Pepperoni",
      price: 14.99,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9b5bea5799ee6f55575ec80fa81c8558.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/be45637985ce751c07c4bd2eeef1574e.jpg",
      alt: "pizza",
      title: "Pizza BBQ",
      price: 15.05,
      img: "https://andys.md/public/menu/thumbs/version_150x100x1/847099313f957f839799decbedf961fa.jpg",
      description: "Pizza with chicken, salami, bacon and with barbecue sauce.",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/bd298e6c40ee7b53cb057d1a5fc0f692.jpg",
      alt: "pizza",
      title: "Pizza Diablo",
      price: 15.02,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/bd298e6c40ee7b53cb057d1a5fc0f692.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/ff9247640705314e0a6fc65f07608505.jpg",
      alt: "pizza",
      title: "Pizza with veggies",
      price: 13.59,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/ff9247640705314e0a6fc65f07608505.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/09bca9c5f053768f192f44493ed47862.jpg",
      alt: "pizza",
      title: "Pizza 4 cheeses",
      price: 15.1,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/09bca9c5f053768f192f44493ed47862.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/c4ef1b6501bc9e4f3fb71a23fd83c41c.jpg",
      alt: "pizza",
      title: "Pizza Capricciosa",
      price: 14.99,
      img: "https://andys.md/public/menu/thumbs/version_150x100x1/733d47fc4ae9d42ad9c25d73494183a0.jpg",
      description:
        "Pizza with ham, pickled mushrooms, pickled eggplants, sheep outbuilding.",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/f494ff3debcec408b7f54a839dc56eef.jpg",
      alt: "pizza",
      title: "Pizza Neapolitan",
      price: 15.04,
      img: "https://andys.md/public/menu/thumbs/version_150x100x1/733d47fc4ae9d42ad9c25d73494183a0.jpg",
      description:
        "Weathered dough for pizza, red sauce for pizza, ham, mushrooms, cheese, black and green olives.",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/d9d19417a969ec3b40068eeb7fa192c0.jpg",
      alt: "pizza",
      title: "Pizza Fattoria",
      price: 14.99,
      img: "https://andys.md/public/menu/thumbs/version_150x100x1/63f8a0db76a7d55012f1d77e755543b7.jpg",
      description:
        "Pizza with chicken meat, champignons, butter, truffle oil and parmesan cheese.",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e99954ed27df9bf7ded6b02ce5113422.jpg",
      alt: "pizza",
      title: "Pizza Bianco",
      price: 13.75,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e99954ed27df9bf7ded6b02ce5113422.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/0c1dd57bef3c9e3ff8598d0d4ea3243c.jpg",
      alt: "pizza",
      title: "Focaccia with tomatoes & rucola",
      price: 13.99,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/0c1dd57bef3c9e3ff8598d0d4ea3243c.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/81196a0750caea2550cad7f3bfd81db1.jpg",
      alt: "pizza",
      title: "Pizza Rancho",
      price: 15.5,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/81196a0750caea2550cad7f3bfd81db1.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/916313c0bf38fa339c686614d5e6d425.jpg",
      alt: "pizza",
      title: "Greek Pizza",
      price: 14.99,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/916313c0bf38fa339c686614d5e6d425.jpg",
      description: "Change..",
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3ebe297f224c7e6bac16e863c2528165.jpg",
      alt: "pizza",
      title: "Pizza Mario",
      price: 14.75,
      img: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3ebe297f224c7e6bac16e863c2528165.jpg",
      description: "Change..",
    },
  ];

  return (
    <div>
      <div className="mx-auto flex w-5/6 border-b pt-10 pb-4 text-4xl font-semibold">
        Pizza
      </div>
      <div className="mx-auto grid w-5/6 grid-cols-5 gap-1 pt-10">
        {producstList.map((item) => (
          <ItemCard item={item} />
        ))}
      </div>
      <div className="flex justify-center pt-9">
        <Link to="/menu">
          <button
            type="button"
            className="rounded-lg border-2 border-solid border-colorYellow py-3 px-14 text-lg font-bold transition  hover:bg-colorYellow hover:text-stone hover:delay-200"
          >
            BACK TO MENU
          </button>
        </Link>
      </div>
    </div>
  );
}
