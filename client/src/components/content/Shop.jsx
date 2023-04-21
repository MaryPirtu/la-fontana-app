import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";

export default function Shop() {
  const producstList = [
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3d76892dac0eaf90981e4767187ecd14.jpg",
      title: "Nuggets",
      price: 9.99,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/509a150d3ec0c7a26b3b2965be1aeeba.jpg",
      title: "Chicken fillet",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/6ba3972d4ef53f3bb3f0bd8b766233e3.jpg",
      title: "Potato balls",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/3589038fa2517a1dce1479f6d1fd72f0.jpg",
      title: "Dye baked",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/563d591b04de9cc1904acf3e7640376b.jpg",
      title: "Chicken sausages",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/4729757d63233687999f596807e83fcd.jpg",
      title: "Beef lasagna",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/2abc64f1982fde346f0e18225972ab0f.jpg",
      title: "Chicken lasagna",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/59cb98d3fedeb00dfd7a18f3896e2404.jpg",
      title: "Cheese dumplings",
      price: 9.99,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/0501b384462819c7f7bca2fde573a6fd.jpg",
      title: "Potato dumplings",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/b5c98d8b202f39d0e99744cd1e52822c.jpg",
      title: "Chicken meat dumplings",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/92d4b3c096e05b6bc190fbf75f4234cc.jpg",
      title: "Vertuta with cheese and herbs",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/a8e727a00495754a35a52647f80fd79e.jpg",
      title: "Vertuta with potatoes",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/09549b61677f391bcb9b9bd46abb2281.jpg",
      title: "Vertuta with sauerkraut",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/ec16260a5de5042c2c3777272dc37946.jpg",
      title: "Vertuta with meat",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/ca0ab11b1369740286451135fc60e8ff.jpg",
      title: "Vertuta with apple",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/172dcde565fab9b98e8aaa412942bcd9.jpg",
      title: "Syrniki",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/e3deaf9d509057e40f4d355fcac76be0.jpg",
      title: "Salted syrniki",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/a0fc52338ee024df09e339532fc23690.jpg",
      title: "Syrniki with currant ",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/a709518038919757d683484a0087efd4.jpg",
      title: "Syrniki with raisins",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/9de9eb91741fc2d89d1b7addda92c4a8.jpg",
      title: "Syrniki with chocolate",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/8daa9d4cad7f0a6750a165497cb1bb8e.jpg",
      title: "Strawberry cheesecake",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/387cc6780ffd3c1d60a15fbc31ea43f5.jpg",
      title: "Apricot chessecake",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/c68bc947cfc11e77bce3b234b1e67071.jpg",
      title: "Salted caramel cheesecake",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/7fad27c59fb1e90e7979a242d3b7e87a.jpg",
      title: "Croissant with vanilla cream",
      price: 10.28,
    },
    {
      src: "https://www.andys.md/public/menu/thumbs/version_220x310x1/5c44864c09c1421d453906c4e054ca95.jpg",
      title: "Croissant with chocolate cream",
      price: 10.28,
    },
  ];

  return (
    <div>
      <div className="mx-auto flex w-5/6 border-b pt-10 pb-4 text-4xl font-semibold">
        Discover our products
      </div>
      <div className="mx-auto grid w-5/6 grid-cols-2 justify-between gap-4 pt-10 sm:grid-cols-5">
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
