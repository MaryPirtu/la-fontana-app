import { Link } from "react-router-dom";
import Restaurants from "./Restaurants";

export default function ShowRestaurants() {
  const infoRestaurats = [
    {
      city: "London",
      number: "0784 967 53",
      address: "10 Teape Close",
      hours: "9:00-23:00",
    },
    {
      city: "Manchester",
      number: "0614 967 531",
      address: "3 Westbourne Terrace, Hyde Park Gardens",
      hours: "10:00-22:30",
    },
    {
      city: "Birmingham",
      number: "0614 967 531",
      address: "25-29 Coventry St",
      hours: "10:00-22:30",
    },
    {
      city: "London",
      number: "0784 967 53",
      address: "10 Teape Close",
      hours: "9:00-23:00",
    },
    {
      city: "Liverpool",
      number: "0614 967 531",
      address: "182 Grays Inn Rd",
      hours: "10:00-22:30",
    },
    {
      city: "Manchester",
      number: "0614 967 531",
      address: "4 St James's Market",
      hours: "10:00-22:3",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3">
      <h1 className="mb-12 flex justify-center pt-16 text-4xl font-bold">
        Our restaurants
      </h1>
      {infoRestaurats.map((el) => (
        <Restaurants
          city={el.city}
          number={el.number}
          address={el.address}
          hours={el.hours}
        />
      ))}
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
